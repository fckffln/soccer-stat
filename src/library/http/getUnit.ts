import {Options} from "./options.model";
import {buildOptions} from "./buildOptions";
import {getHTTP} from "./getHTTP";
import {request} from "./request.model";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {BehaviorSubject} from "rxjs";

export function getUnitList<T>(isLoading$: BehaviorSubject<boolean>, router: Router, unit: string, store: any, options?: Options, callback?: (v: request<T>) => request<T>, url?: string) {
  isLoading$.next(true);
  const uri = 'v2/' + (url ? url : unit);
  getHTTP(options ? `${uri}${buildOptions(options)}` : uri)
    .then(v => {
      if ((v as any)['errorCode']) {
        environment.lastUri = '';
        throw new Error("Can't load " + unit);
      }
      return v;
    })
    .then(v => request.toModel<T>(v, unit))
    .then(v => {
      if (callback) return callback(v);
      return v;
    })
    .then(v => {
      store[unit] = v;
      isLoading$.next(false);
    })
    .catch(() => {
      isLoading$.next(false);
      const url = router.url.slice(1);
      if (url !== '502') environment.lastUri = url;
      router.navigateByUrl('502');
      const msg = "Can't load " + unit;
      throw new Error(msg);
    });
}

export function getUnit<T>(isLoading$: BehaviorSubject<boolean>,router: Router, unit: string, url: string, store: any, options?: Options, callback?: (v: T) => T) {
  isLoading$.next(true);
  const uri = 'v2/' + url;
  getHTTP(options ? `${uri}${buildOptions(options)}` : uri)
    .then(v => {
      if ((v as any)['errorCode']) {
        environment.lastUri = '';
        throw new Error("Can't load " + unit);
      }
      return v;
    })
    .then(v => {
      if (callback) return callback(v);
      return v;
    })
    .then(v => {
      store[unit] = v;
      isLoading$.next(false);
    })
    .catch(() => {
      isLoading$.next(false);
      const url = router.url.slice(1);
      if (url !== '502') environment.lastUri = url;
      router.navigateByUrl('502');
      const msg = "Can't load " + unit;
      throw new Error(msg);
    });
}
