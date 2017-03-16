var chKeywordsList = [ 
	"create",
	"database",
	"table",
	"view",
	"attach",
	"drop",
	"detach",
	"rename",
	"alter",
	"show",
	"databases",
	"tables",
	"processlist",
	"describe",
	"exists",
	"use",
	"set",
	"optimize",
	"insert",
	"select",
    "update",
    "delete",
	"from",
	"sample",
	"array",
	"join",
	"where",
	"prewhere",
	"group",
	"by",
	"with",
	"totals",
	"having",
	"order",
	"distinct",
	"limit",
	"union",
	"all",
	"format",
	"in",
    "into"
]
var chFunctionsList = [ 
	"plus",
	"minus",
	"multiply",
	"divide",
	"intDiv",
	"intDivOrZero",
	"modulo",
	"negate",
	"abs",
	"bitAnd",
	"bitOr",
	"bitXor",
	"bitNot",
	"bitShiftLeft",
	"bitShiftRight",
	"equals",
	"notEquals",
	"less",
	"greater",
	"lessOrEquals",
	"greaterOrEquals",
	"and",
	"or",
	"not",
	"xor",
	"toUInt8",
	"toUInt16",
	"toUInt32",
	"toUInt64",
	"toInt8",
	"toInt16",
	"toInt32",
	"toInt64",
	"toFloat32",
	"toFloat64",
	"toDate",
	"toDateTime",
	"toString",
	"toFixedString",
	"toStringCutToZero",
	"reinterpretAsUInt8",
	"reinterpretAsUInt16",
	"reinterpretAsUInt32",
	"reinterpretAsUInt64",
	"reinterpretAsInt8",
	"reinterpretAsInt16",
	"reinterpretAsInt32",
	"reinterpretAsInt64",
	"reinterpretAsFloat32",
	"reinterpretAsFloat64",
	"reinterpretAsDate",
	"reinterpretAsDateTime",
	"reinterpretAsString",
	"toYear",
	"toMonth",
	"toDayOfMonth",
	"toDayOfWeek",
	"toHour",
	"toMinute",
	"toSecond",
	"toMonday",
	"toStartOfMonth",
	"toStartOfQuarter",
	"toStartOfYear",
	"toStartOfMinute",
	"toStartOfHour",
	"toTime",
	"toRelativeYearNum",
	"toRelativeMonthNum",
	"toRelativeWeekNum",
	"toRelativeDayNum",
	"toRelativeHourNum",
	"toRelativeMinuteNum",
	"toRelativeSecondNum",
	"now",
	"today",
	"yesterday",
	"timeSlot",
	"timeSlots",
	"empty",
	"notEmpty",
	"length",
	"lengthUTF8",
	"lower",
	"upper",
	"lowerUTF8",
	"upperUTF8",
	"reverse",
	"reverseUTF8",
	"concat",
	"substring",
	"substringUTF8",
	"appendTrailingCharIfAbsent",
	"position",
	"positionUTF8",
	"match",
	"extract",
	"extractAll",
	"like",
	"notLike",
	"replaceOne",
	"replaceAll",
	"replaceRegexpOne",
	"replaceRegexpAll",
	"emptyArrayUInt8",
	"emptyArrayUInt16",
	"emptyArrayUInt32",
	"emptyArrayUInt64",
	"emptyArrayInt8",
	"emptyArrayInt16",
	"emptyArrayInt32",
	"emptyArrayInt64",
	"emptyArrayFloat32",
	"emptyArrayFloat64",
	"emptyArrayDate",
	"emptyArrayDateTime",
	"emptyArrayString",
	"range",
	"array",
	"arrayElement",
	"has",
	"indexOf",
	"countEqual",
	"arrayEnumerate",
	"arrayEnumerateUniq",
	"arrayJoin",
	"operator",
	"arrayMap",
	"arrayFilter",
	"arrayCount",
	"arrayExists",
	"arrayAll",
	"arraySum",
	"arrayFirst",
	"arrayFirstIndex",
	"splitByChar",
	"splitByString",
	"alphaTokens",
	"protocol",
	"domain",
	"domainWithoutWWW",
	"topLevelDomain",
	"firstSignificantSubdomain",
	"cutToFirstSignificantSubdomain",
	"path",
	"pathFull",
	"queryString",
	"fragment",
	"queryStringAndFragment",
	"extractURLParameter",
	"extractURLParameters",
	"extractURLParameterNames",
	"URLHierarchy",
	"URLPathHierarchy",
	"cutWWW",
	"cutQueryString",
	"cutFragment",
	"cutQueryStringAndFragment",
	"cutURLParameter",
	"IPv4NumToString",
	"IPv4StringToNum",
	"IPv4NumToStringClassC",
	"IPv6NumToString",
	"IPv6StringToNum",
	"rand",
	"rand64",
	"halfMD5",
	"sipHash64",
	"sipHash128",
	"cityHash64",
	"intHash32",
	"intHash64",
	"URLHash",
	"hex",
	"unhex",
	"bitmaskToList",
	"bitmaskToArray",
	"floor",
	"ceil",
	"round",
	"roundToExp2",
	"roundDuration",
	"roundAge",
	"if",
	"e",
	"pi",
	"exp",
	"log",
	"exp2",
	"log2",
	"exp10",
	"log10",
	"sqrt",
	"cbrt",
	"erf",
	"erfc",
	"lgamma",
	"tgamma",
	"sin",
	"cos",
	"tan",
	"asin",
	"acos",
	"atan",
	"pow",
	"regionToCity",
	"regionToArea",
	"regionToDistrict",
	"regionToCountry",
	"regionToContinent",
	"regionToPopulation",
	"regionIn",
	"regionHierarchy",
	"regionToName",
	"OSIn",
	"SEIn",
	"dictGetUInt8",
	"dictGetUInt16",
	"dictGetUInt32",
	"dictGetUInt64",
	"dictGetInt8",
	"dictGetInt16",
	"dictGetInt32",
	"dictGetInt64",
	"dictGetFloat32",
	"dictGetFloat64",
	"dictGetDate",
	"dictGetDateTime",
	"dictGetString",
	"dictIsIn",
	"dictGetHierarchy",
	"visitParamHas",
	"visitParamExtractUInt",
	"visitParamExtractInt",
	"visitParamExtractFloat",
	"visitParamExtractBool",
	"visitParamExtractRaw",
	"visitParamExtractString",
	"in",
	"tuple",
	"tupleElement",
	"hostName",
	"visibleWidth",
	"toTypeName",
	"blockSize",
	"materialize",
	"ignore",
	"sleep",
	"currentDatabase",
	"isFinite",
	"isInfinite",
	"isNaN",
	"bar",
	"transform",
	"notIn",
	"globalIn",
	"globalNotIn",
	"lambda",
	"countIf",
	"anyIf",
	"anyLastIf",
	"minIf",
	"maxIf",
	"argMinIf",
	"argMaxIf",
	"sumIf",
	"avgIf",
	"uniqIf",
	"uniqHLL12If",
	"uniqExactIf",
	"groupArrayIf",
	"groupUniqArrayIf",
	"medianIf",
	"medianTimingIf",
	"medianDeterministicIf",
	"medianTimingWeightedIf",
	"varSampIf",
	"varPopIf",
	"stddevSampIf",
	"stddevPopIf",
	"covarSampIf",
	"covarPopIf",
	"corrIf",
	"quantileIf",
	"quantilesIf",
	"quantileTimingIf",
	"quantilesTimingIf",
	"quantileTimingWeightedIf",
	"quantilesTimingWeightedIf",
	"quantileDeterministicIf",
	"quantilesDeterministicIf",
	"sequenceMatchIf",
	"uniqUpToIf",
	"countArray",
	"anyArray",
	"anyLastArray",
	"minArray",
	"maxArray",
	"argMinArray",
	"argMaxArray",
	"sumArray",
	"avgArray",
	"uniqArray",
	"uniqHLL12Array",
	"uniqExactArray",
	"groupArrayArray",
	"groupUniqArrayArray",
	"medianArray",
	"medianTimingArray",
	"medianDeterministicArray",
	"medianTimingWeightedArray",
	"varSampArray",
	"varPopArray",
	"stddevSampArray",
	"stddevPopArray",
	"covarSampArray",
	"covarPopArray",
	"corrArray",
	"quantileArray",
	"quantilesArray",
	"quantileTimingArray",
	"quantilesTimingArray",
	"quantileTimingWeightedArray",
	"quantilesTimingWeightedArray",
	"quantileDeterministicArray",
	"quantilesDeterministicArray",
	"sequenceMatchArray",
	"uniqUpToArray",
	"countState",
	"anyState",
	"anyLastState",
	"minState",
	"maxState",
	"argMinState",
	"argMaxState",
	"sumState",
	"avgState",
	"uniqState",
	"uniqHLL12State",
	"uniqExactState",
	"groupArrayState",
	"groupUniqArrayState",
	"medianState",
	"medianTimingState",
	"medianDeterministicState",
	"medianTimingWeightedState",
	"varSampState",
	"varPopState",
	"stddevSampState",
	"stddevPopState",
	"covarSampState",
	"covarPopState",
	"corrState",
	"quantileState",
	"quantilesState",
	"quantileTimingState",
	"quantilesTimingState",
	"quantileTimingWeightedState",
	"quantilesTimingWeightedState",
	"quantileDeterministicState",
	"quantilesDeterministicState",
	"sequenceMatchState",
	"uniqUpToState",
	"countMerge",
	"anyMerge",
	"anyLastMerge",
	"minMerge",
	"maxMerge",
	"argMinMerge",
	"argMaxMerge",
	"sumMerge",
	"avgMerge",
	"uniqMerge",
	"uniqHLL12Merge",
	"uniqExactMerge",
	"groupArrayMerge",
	"groupUniqArrayMerge",
	"medianMerge",
	"medianTimingMerge",
	"medianDeterministicMerge",
	"medianTimingWeightedMerge",
	"varSampMerge",
	"varPopMerge",
	"stddevSampMerge",
	"stddevPopMerge",
	"covarSampMerge",
	"covarPopMerge",
	"corrMerge",
	"quantileMerge",
	"quantilesMerge",
	"quantileTimingMerge",
	"quantilesTimingMerge",
	"quantileTimingWeightedMerge",
	"quantilesTimingWeightedMerge",
	"quantileDeterministicMerge",
	"quantilesDeterministicMerge",
	"sequenceMatchMerge",
	"uniqUpToMerge"
]