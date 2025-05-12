v1.1.0-release.declaration | [dc61227](https://github.com/monitio/SemVer-Typing/commit/dc61227efadac2cc18ab0a5eaf5e40c4847564b8)

Triggered by committer: [@james-beans](https://github.com/james-beans)

---

# What is [SemVer Typing](./VERSIONING.md)?
**SemVer Typing** is a versioning scheme that extends [Semantic Versioning](https://semver.org) or [SemVer](https://semver.org) for short. It allows meaningful tags to be used at the end of each version to describe types and context.

## Examples:
I have put all examples in the [examples folder](https://github.com/monitio/SemVer-Typing/tree/main/examples).

# Format:
Use the following format for every version of your package if it is using [SemVer Typing](./VERSIONING.md):

```md
X.Y.Z-TYPE.INDICATOR.SECONDARYINDICATOR
```

- **X.Y.Z**
	- The major, minor, and patch version numbers, following [Semantic Versioning](https://semver.org/#semantic-versioning-specification).
- **Type**:
	- This is defined under [the Values section](https://github.com/monitio/SemVer-Typing/blob/main/src/VERSIONING.md#values) as it is a value.
- **Indicator**:
	- This is defined under [the Values section](https://github.com/monitio/SemVer-Typing/blob/main/src/VERSIONING.md#values) as it is a value.
- **Secondary Indicator**:
	- This is defined under [the Values section](https://github.com/monitio/SemVer-Typing/blob/main/src/VERSIONING.md#values) as it is a value.

> [!TIP]
> You do not need to use all of the options but it is recommended to use all of the options. - If you misspell any of the format or miss any part of it out there might be issues.
# Values:
Values are like variables in any programming language. They can be swapped for a different variable that fits the situation better and in some cases you can create your own variables.

When I mean "**some cases**" I mean specifically in values you cannot create your own values for the type value only. They are predefined before use.

---

> [!TIP]
> Indicator is sorted into filters here and almost everywhere else. This filters to not need to be put in the final version. Example: Using the build-format `asm` option: `1.0.0-release-asm`

These are the supported values that are allowed:
- **Type** (pick a singular one and no custom options)
	- `release` - for official releases
	- `prerelease` - for pre-releases
	- `testing` - for tests or test builds
- **Indicator** (custom options are supported)
	- `build-format`:
		- `asm` - Assembly build
		- `wasm` - Web Assembly build
		- `JS`/`js` - JavaScript build
		- `TS`/`ts` - TypeScript build
		- `binary` - Binary executable build
		- `custom` - Any other custom build identifier / type
		- `SRC`/`src` - Plain source-code
		- `declaration` - A reasoning declaration of anything (like this)
		- `dts` - TypeScript declarations (`*.d.ts` files)
	- `platform`:
		- `Windows` - Any Windows OS type
		- `Linux` - Any Linux distro / type
		- `Android` - Any Android version
		- `Darwin` - Any MacOS / iOS version
		- `iPadOS` - Any version of iPadOS
		- `iPhone`/`iOS` - Any version of iOS on the iPhone
		- `multiplatform` - Builds to multiple platforms
	- `status`:
		- `working` - Functional / passing tests
		- `broken` - Failing or non-functional
		- `error` - Build failed due to an error
- **Secondary Indicator** (custom options are supported)
	-  This allows any indicator from the previous indicator value to be used here to show more information about your package.
		- Example: `1.0.0-release-custom-darwin` This version means that it is a different format or a custom format that is only available on Darwin devices. Darwin is the secondary indicator here.
