import { ODataClient } from "@odata2ts/odata-client-api";
import { EntitySetServiceV4, EntityTypeServiceV4 } from "@odata2ts/odata-service";

// @ts-ignore
import { QBook, QBookId, qBook } from "../QTester";
// @ts-ignore
import { Book, BookId, EditableBook } from "../TesterModel";
// @ts-ignore
import { AuthorCollectionService, AuthorService } from "./AuthorService";

export class BookService<ClientType extends ODataClient> extends EntityTypeServiceV4<
  ClientType,
  Book,
  EditableBook,
  QBook
> {
  private _authorSrv?: AuthorService<ClientType>;
  private _relatedAuthorsSrv?: AuthorCollectionService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qBook);
  }

  public getAuthorSrv(): AuthorService<ClientType> {
    if (!this._authorSrv) {
      this._authorSrv = new AuthorService(this.client, this.getPath(), "author");
    }

    return this._authorSrv;
  }

  public getRelatedAuthorsSrv(): AuthorCollectionService<ClientType> {
    if (!this._relatedAuthorsSrv) {
      this._relatedAuthorsSrv = new AuthorCollectionService(this.client, this.getPath(), "relatedAuthors");
    }

    return this._relatedAuthorsSrv;
  }
}

export class BookCollectionService<ClientType extends ODataClient> extends EntitySetServiceV4<
  ClientType,
  Book,
  EditableBook,
  QBook,
  BookId,
  BookService<ClientType>
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qBook, BookService, new QBookId(name));
  }
}
