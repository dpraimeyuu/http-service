import { Tag } from 'cerebral/tags';
import { Action } from 'cerebral';

export function httpAbort(regexp: string | Tag): Action;
export function httpDelete(
  url: string | Tag,
  query?: any,
  options?: any
): Action;
export function httpGet(url: string | Tag, query?: any, options?: any): Action;
export function httpPatch(url: string | Tag, body?: any, options?: any): Action;
export function httpPost(url: string | Tag, body?: any, options?: any): Action;
export function httpPut(url: string | Tag, body?: any, options?: any): Action;
export function httpUploadFile(
  urlValue: string | Tag,
  filesValue: string[],
  optionsValue: any[]
): Action;
