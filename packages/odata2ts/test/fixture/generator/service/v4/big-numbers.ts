import type { ODataHttpClient } from "@odata2ts/http-client-api";
import type { StringCollection } from "@odata2ts/odata-query-objects";
import { QBigNumberCollection } from "@odata2ts/odata-query-objects";
import {
  CollectionServiceV4,
  EntitySetServiceV4,
  EntityTypeServiceV4,
  ODataService,
  ODataServiceOptions,
  ODataServiceOptionsInternal,
} from "@odata2ts/odata-service";
// @ts-ignore
import type { QTestEntity } from "./QTester";
// @ts-ignore
import { qTestEntity, QTestEntityId } from "./QTester";
// @ts-ignore
import type { EditableTestEntity, TestEntity, TestEntityId } from "./TesterModel";

export class TesterService<in out ClientType extends ODataHttpClient> extends ODataService<ClientType> {
  constructor(client: ClientType, basePath: string, options?: ODataServiceOptions) {
    super(client, basePath, options);
    this.__base.options.bigNumbersAsString = true;
  }

  public ents(): TestEntityCollectionService<ClientType>;
  public ents(id: TestEntityId): TestEntityService<ClientType>;
  public ents(id?: TestEntityId | undefined) {
    const fieldName = "Ents";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TestEntityCollectionService(client, path, fieldName, options)
      : new TestEntityService(client, path, new QTestEntityId(fieldName).buildUrl(id, isUrlNotEncoded()), options);
  }
}

export class TestEntityService<in out ClientType extends ODataHttpClient> extends EntityTypeServiceV4<
  ClientType,
  TestEntity,
  EditableTestEntity,
  QTestEntity
> {
  private _bigNumberCollection?: CollectionServiceV4<ClientType, StringCollection, QBigNumberCollection>;

  constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal) {
    super(client, basePath, name, qTestEntity, options);
  }

  public bigNumberCollection() {
    if (!this._bigNumberCollection) {
      const { client, path, options } = this.__base;
      this._bigNumberCollection = new CollectionServiceV4(
        client,
        path,
        "bigNumberCollection",
        new QBigNumberCollection(),
        options,
      );
    }

    return this._bigNumberCollection;
  }
}

export class TestEntityCollectionService<in out ClientType extends ODataHttpClient> extends EntitySetServiceV4<
  ClientType,
  TestEntity,
  EditableTestEntity,
  QTestEntity,
  TestEntityId
> {
  constructor(client: ClientType, basePath: string, name: string, options?: ODataServiceOptionsInternal) {
    super(client, basePath, name, qTestEntity, new QTestEntityId(name), options);
  }
}
