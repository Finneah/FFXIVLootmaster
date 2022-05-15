export interface BaseSliceError extends Error {
	// If necessary, put more stuff here
	code: string;
}

export interface BaseSliceLoadingItem<T extends object = {}> {
	requestId: string;
	type: string;
	extra?: T;
}

export interface BaseSliceState<DataType, ErrorType = BaseSliceError> {
	data: Partial<DataType>;
	loading: BaseSliceLoadingItem[];
	error: ErrorType | null;
}