import {
	MatchRollResult,
	TargetRollResult,
	TotalRollResult,
} from '~/types/RollResults';

export type ChatLine = {
	displayName: string;
	timestamp: string;
	userName: string;
};

export type CommandErrorNotice = ChatLine & {
	errorObj: any;
	isError: true;
};

export type RollCommandNotice = ChatLine & {
	isCommand: true;
	isRollCommand: true;
	rollResult: MatchRollResult | TargetRollResult | TotalRollResult;
};

export type UserChat = ChatLine & {
	message: string;
};
