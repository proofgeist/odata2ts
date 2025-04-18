# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.27.0](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.26.0...@odata2ts/odata-query-objects@0.27.0) (2024-12-18)

### Features

* **q-objects:** emulated in-statement without extra parentheses ([#341](https://github.com/odata2ts/odata2ts/issues/341)) ([34c91ed](https://github.com/odata2ts/odata2ts/commit/34c91ed40dadbd7e5a95e1581757e9140b2774e6))

# [0.26.0](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.25.0...@odata2ts/odata-query-objects@0.26.0) (2024-10-28)

### Features

* **generator:** conversion of subtype by control info ([#331](https://github.com/odata2ts/odata2ts/issues/331)) ([a8a8a50](https://github.com/odata2ts/odata2ts/commit/a8a8a50c5a619cfe7e32bf6fa399e2f5b1f55ffa))

# [0.25.0](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.24.0...@odata2ts/odata-query-objects@0.25.0) (2024-09-11)

### Features

* compile src & test folders as sanity check ([12607f0](https://github.com/odata2ts/odata2ts/commit/12607f04a4ec1142d750318cab5964f3d9a513c4))

* **generator:** allow for numeric enums ([#308](https://github.com/odata2ts/odata2ts/issues/308)) ([a5c36e6](https://github.com/odata2ts/odata2ts/commit/a5c36e6433bb5d793d5f970b12d6ebb8a4c5270d))

# [0.24.0](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.23.1...@odata2ts/odata-query-objects@0.24.0) (2024-08-25)

### Code Refactoring

* vitest instead of jest & switch to ESM ([#300](https://github.com/odata2ts/odata2ts/issues/300)) ([7bc8888](https://github.com/odata2ts/odata2ts/commit/7bc88884317b6fc269729cf4eb08602571b69a2d))

### BREAKING CHANGES

* ESM tends to break stuff

## [0.23.1](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.23.0...@odata2ts/odata-query-objects@0.23.1) (2024-08-01)

### Bug Fixes

* only check unencoded value for complex param ([#293](https://github.com/odata2ts/odata2ts/issues/293)) ([1dbd361](https://github.com/odata2ts/odata2ts/commit/1dbd36189b40d9ff709d9317384269c29989336e))

# [0.23.0](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.22.0...@odata2ts/odata-query-objects@0.23.0) (2024-07-31)

### Features

* use path alias for complex function params ([#291](https://github.com/odata2ts/odata2ts/issues/291)) ([b4383c6](https://github.com/odata2ts/odata2ts/commit/b4383c68bf28bcd70c3505d3cdd76e07124057db))

# [0.22.0](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.21.0...@odata2ts/odata-query-objects@0.22.0) (2024-07-31)

### Bug Fixes

* **qobjects:** outdated http-client-api version ([#289](https://github.com/odata2ts/odata2ts/issues/289)) ([d8a81cb](https://github.com/odata2ts/odata2ts/commit/d8a81cbd5a208f1df8b6ad0f2fc8ff3b731645d7))

### Features

* **generator:** support function overloads for different parameter sets ([#282](https://github.com/odata2ts/odata2ts/issues/282)) ([0b53271](https://github.com/odata2ts/odata2ts/commit/0b532710499d975155c21984a62707ecf4789439))

* **q-objects:** support functions with multiple parameter sets ([22720b0](https://github.com/odata2ts/odata2ts/commit/22720b0d3cff6dd447290c0f64921f8f969c2890))

# [0.21.0](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.20.2...@odata2ts/odata-query-objects@0.21.0) (2024-05-03)

### Features

* **q-objects:** binary param ([#266](https://github.com/odata2ts/odata2ts/issues/266)) ([c81c056](https://github.com/odata2ts/odata2ts/commit/c81c0568172100f139aebb39d64ee9cf6e42074f))

## [0.20.2](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.20.1...@odata2ts/odata-query-objects@0.20.2) (2024-04-22)

### Bug Fixes

* **query-objects:** convertTo shouldn't throw for unknown props by default ([#260](https://github.com/odata2ts/odata2ts/issues/260)) ([9c59a60](https://github.com/odata2ts/odata2ts/commit/9c59a60c03ada27d57bf14ff31258a6fb80add82))

## [0.20.1](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.20.0...@odata2ts/odata-query-objects@0.20.1) (2024-03-23)

### Bug Fixes

* **qobject:** allow empty lambda operators ([e281160](https://github.com/odata2ts/odata2ts/commit/e281160617dbdac17a7ad9d6c16ddd8144c7ec19))

# [0.20.0](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.19.0...@odata2ts/odata-query-objects@0.20.0) (2023-08-08)

### Features

* service generation for primitive types ([#201](https://github.com/odata2ts/odata2ts/issues/201)) ([ea9e645](https://github.com/odata2ts/odata2ts/commit/ea9e6452f6b4033c489fbceaf6b75591b550a3f1))

### BREAKING CHANGES

* removed the public method "getQObject"

* refactor(odata2ts): use __base properties of inherited services

* feat(service): introduce PrimitiveTypeService

* feat(odata2ts): allow to generate PrimitiveTypeServices via option enablePrimitivePropertyServices

* feat(example): integration tests for primitive type services

# [0.19.0](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.18.2...@odata2ts/odata-query-objects@0.19.0) (2023-07-31)

### Features

* **qobjects:** add big number types (numbers as strings in v4) ([#193](https://github.com/odata2ts/odata2ts/issues/193)) ([33dd834](https://github.com/odata2ts/odata2ts/commit/33dd8346b1cacdf7bd3fed24ebb187321c9100f7))

## [0.18.2](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.18.1...@odata2ts/odata-query-objects@0.18.2) (2023-06-14)

**Note:** Version bump only for package @odata2ts/odata-query-objects

## [0.18.1](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.18.0...@odata2ts/odata-query-objects@0.18.1) (2023-06-10)

**Note:** Version bump only for package @odata2ts/odata-query-objects

# [0.18.0](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.17.3...@odata2ts/odata-query-objects@0.18.0) (2023-06-03)

### Features

* force new minor for new http-client-api ([c29d5bc](https://github.com/odata2ts/odata2ts/commit/c29d5bc009776f1791e64e7f397f14fa6444ff1a))

## [0.17.3](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.17.2...@odata2ts/odata-query-objects@0.17.3) (2023-04-18)

**Note:** Version bump only for package @odata2ts/odata-query-objects

## [0.17.2](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.17.1...@odata2ts/odata-query-objects@0.17.2) (2023-04-13)

### Bug Fixes

* **qobjects:** add IdentityConverter and remove dep to converter-runtime ([#148](https://github.com/odata2ts/odata2ts/issues/148)) ([78282c8](https://github.com/odata2ts/odata2ts/commit/78282c8c121c6c8a8891e495e04b0e75800d9d02))

## [0.17.1](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.17.0...@odata2ts/odata-query-objects@0.17.1) (2023-04-08)

**Note:** Version bump only for package @odata2ts/odata-query-objects

# [0.17.0](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.16.4...@odata2ts/odata-query-objects@0.17.0) (2023-02-14)

### Features

* workaround for extra results wrapping ([#131](https://github.com/odata2ts/odata2ts/issues/131)) ([abef1d2](https://github.com/odata2ts/odata2ts/commit/abef1d2e6765bee7be764add5aae6a1f3b77adb0))

## [0.16.4](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.16.1...@odata2ts/odata-query-objects@0.16.4) (2023-02-13)

**Note:** Version bump only for package @odata2ts/odata-query-objects

## [0.16.3](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.16.1...@odata2ts/odata-query-objects@0.16.3) (2023-02-13)

**Note:** Version bump only for package @odata2ts/odata-query-objects

## [0.16.2](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.16.1...@odata2ts/odata-query-objects@0.16.2) (2023-02-13)

**Note:** Version bump only for package @odata2ts/odata-query-objects

## [0.16.1](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.16.0...@odata2ts/odata-query-objects@0.16.1) (2023-02-03)

**Note:** Version bump only for package @odata2ts/odata-query-objects

# [0.16.0](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.15.1...@odata2ts/odata-query-objects@0.16.0) (2023-01-10)

### Features

* **odata-query-objects:** convertToOData with param to allow unknown props ([#108](https://github.com/odata2ts/odata2ts/issues/108)) ([89c51bb](https://github.com/odata2ts/odata2ts/commit/89c51bb64c829754afd5317c4015c027f86ea553))

## [0.15.1](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.15.0...@odata2ts/odata-query-objects@0.15.1) (2023-01-07)

**Note:** Version bump only for package @odata2ts/odata-query-objects

# [0.15.0](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.14.0...@odata2ts/odata-query-objects@0.15.0) (2023-01-05)

### Bug Fixes

* **odata-query-objects:** v2 query functions must return QNumberV2Path ([#87](https://github.com/odata2ts/odata2ts/issues/87)) ([cc36d68](https://github.com/odata2ts/odata2ts/commit/cc36d68c9fe6d1632da2ee92b803e57e3e293fae))

### Features

* dedicated number params for V2 ([#84](https://github.com/odata2ts/odata2ts/issues/84)) ([7a440d9](https://github.com/odata2ts/odata2ts/commit/7a440d92c40b39aedd4479ceed4afa18cc3a0ce9))

* encode & decode function params properly ([#96](https://github.com/odata2ts/odata2ts/issues/96)) ([ca88f57](https://github.com/odata2ts/odata2ts/commit/ca88f572674181962760005cf33f820e231a2b51))

* improved number handling ([#86](https://github.com/odata2ts/odata2ts/issues/86)) ([08e9fe0](https://github.com/odata2ts/odata2ts/commit/08e9fe0feaf5af6fcfe0ab8af7ff27d1d52eb097))

# [0.14.0](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.13.0...@odata2ts/odata-query-objects@0.14.0) (2022-12-21)

### Bug Fixes

* **odata-query-objects:** missing dep on odata-client-api ([de42b24](https://github.com/odata2ts/odata2ts/commit/de42b247181537479787a1bb8e9d462964e69e6e))

* **odata-query-objects:** QFilterExpression without state and accepting null | undefined ([79aa3f7](https://github.com/odata2ts/odata2ts/commit/79aa3f7980c551b398b0560027289bcc542519b3))

### Features

* **odata-query-objects:** proper QSearchTerm to support V4 $search query option ([1aaef9a](https://github.com/odata2ts/odata2ts/commit/1aaef9a8e1390a104699126f48741134e189f93a))

### BREAKING CHANGES

* **odata-query-objects:** QFilterExpressions might have been used in stateful manner, work with dynamically evaluating to null | undefined

# [0.13.0](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.11.1...@odata2ts/odata-query-objects@0.13.0) (2022-12-18)

### Features

* **odata-query-objects:** add mapped name to Q-operation params ([#71](https://github.com/odata2ts/odata2ts/issues/71)) ([4ff0cfc](https://github.com/odata2ts/odata2ts/commit/4ff0cfc94182dfa12c817844a31d2fd5e134dc27))

* **odata-query-objects:** conversion functions for QueryObject ([#73](https://github.com/odata2ts/odata2ts/issues/73)) ([86cc256](https://github.com/odata2ts/odata2ts/commit/86cc2563568ff5b6dd079de701521ae43437087d))

* **odata-query-objects:** conversion functions must handle null, undefined and arrays & special conversion functions for collections ([11edf2c](https://github.com/odata2ts/odata2ts/commit/11edf2c0897b696feeb3278a6ee18263b10767d8))

* **odata-query-objects:** implement converters in QPath and QParam ([#65](https://github.com/odata2ts/odata2ts/issues/65)) ([c839a98](https://github.com/odata2ts/odata2ts/commit/c839a9888d014ba93ba791e8ce4c96f6fcdb9d57))

* **odata-query-objects:** introduce OperationReturnType to handle response conversion in operations ([96775e0](https://github.com/odata2ts/odata2ts/commit/96775e0e9a3a87afd502c46371db81794d4356db))

* **odata-query-objects:** name mapping and conversion for function and action params ([5092fea](https://github.com/odata2ts/odata2ts/commit/5092fea3f000034f2ae49d153f57e5308731c8ea))

# [0.12.0](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.11.1...@odata2ts/odata-query-objects@0.12.0) (2022-12-18)

### Features

* **odata-query-objects:** add mapped name to Q-operation params ([#71](https://github.com/odata2ts/odata2ts/issues/71)) ([4ff0cfc](https://github.com/odata2ts/odata2ts/commit/4ff0cfc94182dfa12c817844a31d2fd5e134dc27))

* **odata-query-objects:** conversion functions for QueryObject ([#73](https://github.com/odata2ts/odata2ts/issues/73)) ([86cc256](https://github.com/odata2ts/odata2ts/commit/86cc2563568ff5b6dd079de701521ae43437087d))

* **odata-query-objects:** conversion functions must handle null, undefined and arrays & special conversion functions for collections ([11edf2c](https://github.com/odata2ts/odata2ts/commit/11edf2c0897b696feeb3278a6ee18263b10767d8))

* **odata-query-objects:** implement converters in QPath and QParam ([#65](https://github.com/odata2ts/odata2ts/issues/65)) ([c839a98](https://github.com/odata2ts/odata2ts/commit/c839a9888d014ba93ba791e8ce4c96f6fcdb9d57))

* **odata-query-objects:** introduce OperationReturnType to handle response conversion in operations ([96775e0](https://github.com/odata2ts/odata2ts/commit/96775e0e9a3a87afd502c46371db81794d4356db))

* **odata-query-objects:** name mapping and conversion for function and action params ([5092fea](https://github.com/odata2ts/odata2ts/commit/5092fea3f000034f2ae49d153f57e5308731c8ea))

## [0.11.1](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.11.0...@odata2ts/odata-query-objects@0.11.1) (2022-09-09)

### Bug Fixes

* **odata-query-objects:** export QId ([eced875](https://github.com/odata2ts/odata2ts/commit/eced875fb2306156b0324850490f50a9b396812d))

* **odata-query-objects:** fix tests ([561cb70](https://github.com/odata2ts/odata2ts/commit/561cb701b60f888d72b7225409ec70b4b08e6c9b))

# [0.11.0](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.10.4...@odata2ts/odata-query-objects@0.11.0) (2022-09-08)

### Code Refactoring

* centralize formatting and parsing of params & attributes ([#62](https://github.com/odata2ts/odata2ts/issues/62)) ([ba93a27](https://github.com/odata2ts/odata2ts/commit/ba93a278afd2de356675973fb2889483bc370f7a))

### BREAKING CHANGES

* UrlHelper including compile and parse methods have been removed; interfaces for EntityKeyProp, EntityKeySpec, InlineUrlProp, and InlineUrlProps have been removed; parsing of passed parameters is more strict.

Introducing static functions on QPath objects to format and parse url conform values.

Introducing QParams, QFunction and QAction to bundle logic around operations including the id function (url path generation).

Generate models for IdType of entity & parameter models for functions / actions in general

Generate Q-objects for EntityIdFunctions, and functions & actions in general

## [0.10.4](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.10.3...@odata2ts/odata-query-objects@0.10.4) (2022-08-25)

### Bug Fixes

* always create errors with new operator ([#54](https://github.com/odata2ts/odata2ts/issues/54)) ([562dede](https://github.com/odata2ts/odata2ts/commit/562dede85d7ce276957a4b1683856d4adfee3ad1))

## [0.10.3](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.10.2...@odata2ts/odata-query-objects@0.10.3) (2022-07-20)

### Bug Fixes

* guids in v2 have special syntax (guid'xxxx-...') ([#35](https://github.com/odata2ts/odata2ts/issues/35)) ([a551bcc](https://github.com/odata2ts/odata2ts/commit/a551bccf27dc7e8348020840402372582f9448e5))

## [0.10.2](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.10.1...@odata2ts/odata-query-objects@0.10.2) (2022-06-30)

### Bug Fixes

* add prebulish script to guarantee building before publishing ([b6986db](https://github.com/odata2ts/odata2ts/commit/b6986dbdb258b7b3cb8f36ab52ae1ff7b093f7dc))

## [0.10.1](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.10.0...@odata2ts/odata-query-objects@0.10.1) (2022-06-30)

### Bug Fixes

* private prop prefix might conflict with generated prop of extending class ([#31](https://github.com/odata2ts/odata2ts/issues/31)) ([73b3d1f](https://github.com/odata2ts/odata2ts/commit/73b3d1fc1d7e00681a0bae0427d0d62ce19b0a4c))

# [0.10.0](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.9.0...@odata2ts/odata-query-objects@0.10.0) (2022-05-21)

### Features

* **qObjects:** better typing for QEntityPath & QEntityCollectionPath ([d42a002](https://github.com/odata2ts/odata2ts/commit/d42a002d4f7a4bcb7941689604a2e43584f83b7f))

* **qObjects:** QPath objects for v2 types ([#23](https://github.com/odata2ts/odata2ts/issues/23)) ([bad6b29](https://github.com/odata2ts/odata2ts/commit/bad6b29d30e6b5f10d296dd673317b3fb43b1c95))

* Feat/refactor query objects (#20) ([67b662a](https://github.com/odata2ts/odata2ts/commit/67b662a6da3344eb215b4f1276bf26464d2126f5)), closes [#20](https://github.com/odata2ts/odata2ts/issues/20)

### Bug Fixes

* **test:** collect code coverage from src folders, thus exhibiting untested code ([3acef8b](https://github.com/odata2ts/odata2ts/commit/3acef8b83b2625579bbce4a967724e884c39c358))

* **test:** make coverage test run again ([f2d360b](https://github.com/odata2ts/odata2ts/commit/f2d360bac59901bd056dab5755dcf66d66988af5))

### BREAKING CHANGES

* no EntityFactory anymore, no nominalized types in interfaces anymore, etc.

* refactor(qObjects): getEntity with prefix option; by default without prefix

* fix(qObjects): better QPath modelling

* refactor(uri-builder): only use QueryObjects for typing & remove QEntityModel stuff

* refactor(odata2model): generate new QObject classes

* refactor(service): services now require Model as well as QClass

* refactor(odata2model): generate services with new QObject classes

* fix(odata2model): fix integration tests

* fix: make int-tests for coverage task work again

* fix: skip run-cli tests (don't work on github)

# [0.9.0](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.8.1...@odata2ts/odata-query-objects@0.9.0) (2021-10-12)

### Features

* **qObjects:** entityPath with props attribute ([#11](https://github.com/odata2ts/odata2ts/issues/11)) ([5d2f5d1](https://github.com/odata2ts/odata2ts/commit/5d2f5d12b968cafd53fa07ec5e9fe4d5bd086ad0))

## [0.8.1](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.8.0...@odata2ts/odata-query-objects@0.8.1) (2021-09-17)

### Bug Fixes

* **qObjects:** Unnominalized must respect optional attributes ([c882690](https://github.com/odata2ts/odata2ts/commit/c8826902a778612470363433e52c120e214303fa))

# [0.8.0](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.7.0...@odata2ts/odata-query-objects@0.8.0) (2021-09-16)

### Features

* **qObjects:** make Unnominalized recursive ([9afa139](https://github.com/odata2ts/odata2ts/commit/9afa13977e05a836a5dc5a9ddf53b3fdeb69ef63))

* **qObjects:** support lambda functions (any & all) ([3d45804](https://github.com/odata2ts/odata2ts/commit/3d458049b228f444a47491a1f002d5849c6d9577))

* **type-fest:** add type-fest as dependency ([dfb4cd6](https://github.com/odata2ts/odata2ts/commit/dfb4cd69a94cd824eb107d12cc08fb0052d4ca06))

# [0.7.0](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.6.0...@odata2ts/odata-query-objects@0.7.0) (2021-08-31)

### Features

* **qObjects:** add ts converter to translate nominal types into strings ([c57487b](https://github.com/odata2ts/odata2ts/commit/c57487b6d774c787cc2ae26f88a9ed14327a9cef))

* **uri-builder:** order by implementation for uri-builder ([3502b75](https://github.com/odata2ts/odata2ts/commit/3502b755f744ba2b58ee43331d85dc5ef6235304))

* map ID to id ([a0652fa](https://github.com/odata2ts/odata2ts/commit/a0652fa70617de2ce9de70d9b294532bce8c8b91))

# [0.6.0](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.5.0...@odata2ts/odata-query-objects@0.6.0) (2021-08-16)

### Features

* **odata-query-objects:** uncapitalize qObject props ([86e7cff](https://github.com/odata2ts/odata2ts/commit/86e7cffb8d83a876006606df1921b8e186564329))

* **qObjects:** divide in QCollectionPath & QEntityCollectionPath ([cab60b4](https://github.com/odata2ts/odata2ts/commit/cab60b4fbac3b09a8d4ef0eb4aec8e8885c2974a))

* **qObjects:** make collections work ([23bf808](https://github.com/odata2ts/odata2ts/commit/23bf808fcdda2065395c2d38c4f72d7a436da942))

# [0.5.0](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.4.0...@odata2ts/odata-query-objects@0.5.0) (2021-08-10)

### Code Refactoring

* QEntityModel without key spec ([913cd11](https://github.com/odata2ts/odata2ts/commit/913cd11df132969aca80054b2d1584bfe678a729))

### Features

* **qObjects:** add QPrimitiveCollectionPath ([0a93c74](https://github.com/odata2ts/odata2ts/commit/0a93c741ea049f3f5a075869ab58daba911e7dd0))

* **qObjects:** integrate QEnumPath & refactor to QCollectionPath ([cb95d06](https://github.com/odata2ts/odata2ts/commit/cb95d067899d5cb28b72dea22ef7f2d458f64830))

* **qObjects:** QCollectionPath & EntityPath with default enumTypes ([9743020](https://github.com/odata2ts/odata2ts/commit/9743020712df43f111d8961c41bf3c4acf6512ed))

### BREAKING CHANGES

* [query-objects]: QEntityModel without key spec & __collectionPath; [UrlBuilder]: path must be provided explicitly now for any entity set

# [0.4.0](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.3.3...@odata2ts/odata-query-objects@0.4.0) (2021-07-08)

### Bug Fixes

* **qObjects:** or-expressions require parentheses ([1b171a3](https://github.com/odata2ts/odata2ts/commit/1b171a350966953a9f5cd10bf22354c620c39b53))

* **qObjects:** QGuidPath must return expressions ([b9cc9ac](https://github.com/odata2ts/odata2ts/commit/b9cc9acdff0be164779ef5d105cf45f057a996e8))

### Features

* **qObjects:** add in operator ([e525cea](https://github.com/odata2ts/odata2ts/commit/e525cea5e131572ef44fa712dad362e59af958f8))

* **qObjects:** add OrderByExpressions ([a7f1237](https://github.com/odata2ts/odata2ts/commit/a7f123790eb1a8261f9b64637ed115d0cfb19e80))

## [0.3.3](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.3.2...@odata2ts/odata-query-objects@0.3.3) (2021-07-01)

### Bug Fixes

* add declaration for all packages ([1d8b380](https://github.com/odata2ts/odata2ts/commit/1d8b380cc2db2568189121980c3bab2bdb5545f9))

## [0.3.2](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.3.1...@odata2ts/odata-query-objects@0.3.2) (2021-07-01)

### Bug Fixes

* **qObjects:** nominal types must come before string type ([6b91ca4](https://github.com/odata2ts/odata2ts/commit/6b91ca4a3dfe2fceb2e2410face14a318c3d26ed))

## [0.3.1](https://github.com/odata2ts/odata2ts/compare/@odata2ts/odata-query-objects@0.3.0...@odata2ts/odata-query-objects@0.3.1) (2021-07-01)

**Note:** Version bump only for package @odata2ts/odata-query-objects
