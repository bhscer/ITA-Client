export namespace ErrorCode {
	export enum FORM {
		INVALID_USERNAME = 1000,
		INVALID_PSW = 1001,
		INVALID_EMAIL = 1002,
		INCONSISTENT_PSW = 1003,
		USERNAME_CONFLICT = 1004,
		EMAIL_CONFLICT = 1005,
		PSW_TOO_SIMPLE = 1006,
		NO_FORMAT_ERROR = 1007,
		NO_CONFLICT = 1008,
		UNKNOWN_ACCOUNT = 1010,
		UNKNOWN_EMAIL = 1011,
		PSW_WRONG = 1012,
		CODE_WRONG = 1020,
		TRY_AGAIN_AFTER_ = 1021,
		ALREADY_VERIFIED = 1022,
		NEED_VERIFICATION = 1023,
		CODE_EXPIRED = 1024,
		SIGNATURE_TOO_LONG = 1030,
		USERNAME_TOO_LONG = 1031,
	}
	export enum BBS {
		UNKNOWN_ARTICLE = 1100,
		UNKNOWN_COMMENT = 1101,
		ALREADY_CHECKED_IN = 1103,
	}
	export enum REQUEST {
		MISSING_PARAM = 2000,
		OUT_OF_RANGE = 2001,
		PERMISSION_DENIED = 2002,
	}
	export enum USER {
		NOT_FOUND = 3000,
	}
	export enum EVENT {
		NOT_FOUND = 3101,
		HAS_JOINED = 3102,
		EXCEEDED_THE_UPPER_LIMIT = 3103,
		NOT_JOINED = 3104,
		DEADLINE_HAS_PASSED = 3105,
		IS_NOT_MANUAL_STOP = 3106,
		HAS_STOPPED = 3107,
		NOT_STOP = 3108,
	}
	export enum CHALLENGE {
		NOT_FOUND = 3200,
		FLAG_WRONG = 3201,
	}
	export enum COMPETITION {
		NOT_FOUND = 3300,
		ALREADY_PASSED = 3301,
		FORBIDDEN = 3302,
	}
}
