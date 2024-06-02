import { createHook, executionAsyncId } from 'async_hooks';
import { Request, Response, NextFunction } from 'express';

type Store = Map<string, any>;
const storeMap = new Map<number, Store>();

const asyncHook = createHook({
  init(asyncId, type, triggerAsyncId) {
    if (storeMap.has(triggerAsyncId)) {
      storeMap.set(asyncId, new Map(storeMap.get(triggerAsyncId)));
    }
  },
  destroy(asyncId) {
    if (storeMap.has(asyncId)) {
      storeMap.delete(asyncId);
    }
  }
});

asyncHook.enable();

export function initializeStore(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const asyncId = executionAsyncId();
  storeMap.set(asyncId, new Map());
  next();
}

export function addToStore(key: string, value: any) {
  const asyncId = executionAsyncId();
  const store = storeMap.get(asyncId);
  if (store) {
    store.set(key, value);
  } else {
    throw new Error('Store not initialized');
  }
}

export function getFromStore<T>(key: string): T | undefined {
  const asyncId = executionAsyncId();
  if (storeMap.has(asyncId)) {
    return storeMap.get(asyncId)?.get(key);
  }
  return undefined;
}

export function getAllFromStore(): Store | undefined {
  const asyncId = executionAsyncId();
  if (storeMap.has(asyncId)) {
    return storeMap.get(asyncId);
  }
  return undefined;
}
