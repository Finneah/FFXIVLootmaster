import { AnyAction, AsyncThunk, CaseReducer } from "@reduxjs/toolkit";

import { BaseSliceLoadingItem, BaseSliceState } from "./base.types";

export const baseSliceLoadingReducer: CaseReducer = <
  T extends BaseSliceState<T>,
  A extends AnyAction
>(
  state: T,
  action: A
) => {
  const loadingItem: BaseSliceLoadingItem = {
    requestId: action.meta.requestId,
    type: action.type,
  };

  state.loading.push(loadingItem);
  state.error = null;
};

export const baseSliceErrorReducer: CaseReducer = <
  T extends BaseSliceState<T>,
  A extends AnyAction
>(
  state: T,
  action: A
) => {
  state.error = action.error;

  state.loading = state.loading.filter(
    (loadingItem) => loadingItem.requestId != action.meta.requestId
  );
};

export const baseSliceFulfilledSplice = (
  state: { loading: BaseSliceLoadingItem[]; error: Error | null },
  action: AnyAction
) => {
  state.loading = state.loading.filter(
    (loadingItem) => loadingItem.requestId != action.meta.requestId
  );
  state.error = null;
};

export const actionIsLoading = (
  loading: BaseSliceLoadingItem[],
  actionToCompare: AsyncThunk<any, any, any>
) => {
  return (
    loading &&
    Array.isArray(loading) &&
    loading.some(
      (loadingItem) => loadingItem.type === actionToCompare.pending.type
    )
  );
};
