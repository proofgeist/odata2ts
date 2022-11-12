import { QParam, UrlParamValueFormatter, UrlParamValueParser } from "../../internal";
import { formatParamWithTypePrefix, parseWithTypePrefix } from "../UrlParamHelper";

export const TIME_V2_TYPE_PREFIX = "time";

export const getUrlConformValue: UrlParamValueFormatter<string> = (value) => {
  return formatParamWithTypePrefix(TIME_V2_TYPE_PREFIX, value);
};

export const parseValueFromUrl: UrlParamValueParser<string> = (urlConformValue) => {
  return parseWithTypePrefix(TIME_V2_TYPE_PREFIX, urlConformValue);
};

export class QTimeV2Param<ConvertedType = string> extends QParam<string, ConvertedType> {
  getUrlConformValue = getUrlConformValue;
  parseValueFromUrl = parseValueFromUrl;
}