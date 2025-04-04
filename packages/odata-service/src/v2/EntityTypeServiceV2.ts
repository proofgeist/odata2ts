import { ODataHttpClient, ODataHttpClientConfig, ODataResponse } from "@odata2ts/http-client-api";
import { ODataModelResponseV2 } from "@odata2ts/odata-core";
import { ODataQueryBuilderV2 } from "@odata2ts/odata-query-builder";
import { convertV2ModelResponse, QueryObjectModel } from "@odata2ts/odata-query-objects";
import { ODataServiceOptions } from "../ODataServiceOptions";
import { MERGE_HEADERS } from "../RequestHeaders.js";
import { ServiceStateHelperV2 } from "./ServiceStateHelperV2.js";

export class EntityTypeServiceV2<in out ClientType extends ODataHttpClient, T, EditableT, Q extends QueryObjectModel> {
  protected readonly __base: ServiceStateHelperV2<ClientType, Q>;

  protected constructor(client: ClientType, basePath: string, name: string, qModel: Q, options?: ODataServiceOptions) {
    this.__base = new ServiceStateHelperV2(client, basePath, name, qModel, options);
  }

  public getPath() {
    return this.__base.path;
  }

  public patch(model: Partial<EditableT>, requestConfig?: ODataHttpClientConfig<ClientType>): ODataResponse<void> {
    const { client, qModel, path, getDefaultHeaders } = this.__base;
    const headers = { ...getDefaultHeaders(), ...MERGE_HEADERS };
    return client.post(path, qModel.convertToOData(model), requestConfig, headers);
  }

  public update(model: EditableT, requestConfig?: ODataHttpClientConfig<ClientType>): ODataResponse<void> {
    const { client, qModel, path, getDefaultHeaders } = this.__base;
    return client.put(path, qModel.convertToOData(model), requestConfig, getDefaultHeaders());
  }

  public async delete(requestConfig?: ODataHttpClientConfig<ClientType>): ODataResponse<void> {
    const { client, path } = this.__base;
    return client.delete(path, requestConfig);
  }

  public async query<ReturnType extends Partial<T> = T>(
    queryFn?: (builder: ODataQueryBuilderV2<Q>, qObject: Q) => void,
    requestConfig?: ODataHttpClientConfig<ClientType>,
  ): ODataResponse<ODataModelResponseV2<ReturnType>> {
    const { client, qResponseType, getDefaultHeaders, applyQueryBuilder } = this.__base;

    const url = applyQueryBuilder(queryFn);
    const response = await client.get<ODataModelResponseV2<any>>(url, requestConfig, getDefaultHeaders());
    return convertV2ModelResponse(response, qResponseType);
  }
}
