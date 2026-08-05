
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/private';
 * 
 * console.log(ENVIRONMENT); // => "production"
 * console.log(PUBLIC_BASE_URL); // => throws error during build
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/private' {
	export const ACLOCAL_PATH: string;
	export const HOME: string;
	export const BROWSER_INACTIVITY_TIMEOUT: string;
	export const npm_config_node_gyp: string;
	export const CHROME_CRASHPAD_PIPE_NAME: string;
	export const ALLUSERSPROFILE: string;
	export const APPDATA: string;
	export const COLOR: string;
	export const EDITOR: string;
	export const MANPATH: string;
	export const APP_BUILD_HASH: string;
	export const HERMES_SESSION_THREAD_ID: string;
	export const MSYSTEM_CARCH: string;
	export const LOGONSERVER: string;
	export const TERMINAL_SINGULARITY_IMAGE: string;
	export const HERMES_MAX_ITERATIONS: string;
	export const COMMONPROGRAMFILES: string;
	export const HERMES_SESSION_ID: string;
	export const COMMONPROGRAMW6432: string;
	export const PROCESSOR_IDENTIFIER: string;
	export const MSYS_NO_PATHCONV: string;
	export const COMPUTERNAME: string;
	export const COMSPEC: string;
	export const CONFIG_SITE: string;
	export const DISPLAY: string;
	export const LANG: string;
	export const DRIVERDATA: string;
	export const TERMINAL_DOCKER_NETWORK: string;
	export const EFC_8728: string;
	export const HERMES_SERVE_HEADLESS: string;
	export const PSMODULEPATH: string;
	export const NPM_PREFIX_JS: string;
	export const FPS_BROWSER_APP_PROFILE_STRING: string;
	export const HERMES_SESSION_SOURCE: string;
	export const EXEPATH: string;
	export const HERMES_HOME: string;
	export const PROGRAMDATA: string;
	export const FPS_BROWSER_USER_PROFILE_STRING: string;
	export const HERMES_AGENT_TIMEOUT: string;
	export const HERMES_CRON_SESSION: string;
	export const HERMES_DESKTOP: string;
	export const HERMES_UI_SESSION_ID: string;
	export const HERMES_EXEC_ASK: string;
	export const HERMES_GATEWAY_SESSION: string;
	export const MSYSTEM: string;
	export const HERMES_INTERACTIVE: string;
	export const HOSTNAME: string;
	export const npm_config_allow_scripts: string;
	export const HERMES_SESSION_USER_NAME: string;
	export const HERMES_SESSION_CHAT_TYPE: string;
	export const HERMES_QUIET: string;
	export const MSYSTEM_PREFIX: string;
	export const HERMES_REAL_HOME: string;
	export const HERMES_SESSION_CHAT_ID: string;
	export const HERMES_SESSION_CHAT_NAME: string;
	export const HERMES_SESSION_KEY: string;
	export const HERMES_SESSION_MESSAGE_ID: string;
	export const HERMES_SESSION_PLATFORM: string;
	export const HERMES_SESSION_PROFILE: string;
	export const MINGW_PREFIX: string;
	export const HOMEDRIVE: string;
	export const HERMES_SESSION_USER_ID: string;
	export const npm_config_user_agent: string;
	export const MINGW_PACKAGE_PREFIX: string;
	export const HERMES_WEB_DIST: string;
	export const HOMEPATH: string;
	export const PKG_CONFIG_SYSTEM_LIBRARY_PATH: string;
	export const INIT_CWD: string;
	export const INFOPATH: string;
	export const LOCALAPPDATA: string;
	export const MINGW_CHOST: string;
	export const MSYS2_ARG_CONV_EXCL: string;
	export const MSYSTEM_CHOST: string;
	export const NODE: string;
	export const NODE_ENV: string;
	export const PIP_BUILD_TRACKER: string;
	export const npm_package_engines_node: string;
	export const NODE_EXE: string;
	export const NODE_OPTIONS: string;
	export const NPM_CLI_JS: string;
	export const npm_command: string;
	export const npm_config_cache: string;
	export const npm_config_engine_strict: string;
	export const npm_config_globalconfig: string;
	export const npm_config_global_prefix: string;
	export const npm_config_init_module: string;
	export const npm_config_local_prefix: string;
	export const npm_config_noproxy: string;
	export const npm_config_npm_version: string;
	export const NPM_PREFIX_NPM_CLI_JS: string;
	export const npm_config_prefix: string;
	export const npm_config_userconfig: string;
	export const npm_execpath: string;
	export const npm_lifecycle_event: string;
	export const npm_lifecycle_script: string;
	export const npm_node_execpath: string;
	export const npm_package_engines_npm: string;
	export const WINDIR: string;
	export const npm_package_json: string;
	export const npm_package_name: string;
	export const npm_package_version: string;
	export const NUMBER_OF_PROCESSORS: string;
	export const OLDPWD: string;
	export const OLLAMA_HOST: string;
	export const ONEDRIVE: string;
	export const ORIGINAL_PATH: string;
	export const ORIGINAL_TEMP: string;
	export const ORIGINAL_TMP: string;
	export const OS: string;
	export const TERMINAL_DAYTONA_IMAGE: string;
	export const PATH: string;
	export const PATHEXT: string;
	export const SSH_ASKPASS: string;
	export const PKG_CONFIG_PATH: string;
	export const PKG_CONFIG_SYSTEM_INCLUDE_PATH: string;
	export const PLINK_PROTOCOL: string;
	export const __COMPAT_LAYER: string;
	export const PROCESSOR_ARCHITECTURE: string;
	export const PROCESSOR_LEVEL: string;
	export const PROCESSOR_REVISION: string;
	export const PROGRAMFILES: string;
	export const _CONFIG_VERSION: string;
	export const PROGRAMW6432: string;
	export const PROMPT: string;
	export const PS1: string;
	export const PUBLIC: string;
	export const PWD: string;
	export const PYTHONIOENCODING: string;
	export const PYTHONNOUSERSITE: string;
	export const PYTHONPATH: string;
	export const PYTHONUTF8: string;
	export const TERMINAL_CONTAINER_CPU: string;
	export const SESSIONNAME: string;
	export const SHELL: string;
	export const SHLVL: string;
	export const SSL_CERT_FILE: string;
	export const SYSTEMDRIVE: string;
	export const SYSTEMROOT: string;
	export const TEMP: string;
	export const TERMINAL_CONTAINER_DISK: string;
	export const TERM: string;
	export const TERMINAL_CONTAINER_MEMORY: string;
	export const TERMINAL_LIFETIME_SECONDS: string;
	export const TERMINAL_CONTAINER_PERSISTENT: string;
	export const TERMINAL_CWD: string;
	export const TERMINAL_DOCKER_ENV: string;
	export const TERMINAL_DOCKER_EXTRA_ARGS: string;
	export const TERMINAL_DOCKER_FORWARD_ENV: string;
	export const TERMINAL_DOCKER_IMAGE: string;
	export const TERMINAL_DOCKER_MOUNT_CWD_TO_WORKSPACE: string;
	export const TERMINAL_DOCKER_RUN_AS_HOST_USER: string;
	export const TERMINAL_DOCKER_SHM_SIZE: string;
	export const TERMINAL_DOCKER_VOLUMES: string;
	export const TERMINAL_ENV: string;
	export const TERMINAL_HOME_MODE: string;
	export const TERMINAL_MODAL_IMAGE: string;
	export const TERMINAL_MODAL_MODE: string;
	export const TERMINAL_PERSISTENT_SHELL: string;
	export const TERMINAL_TIMEOUT: string;
	export const TERMINAL_VERCEL_RUNTIME: string;
	export const TMP: string;
	export const TMPDIR: string;
	export const USERDOMAIN: string;
	export const USERDOMAIN_ROAMINGPROFILE: string;
	export const USERNAME: string;
	export const USERPROFILE: string;
	export const VIRTUAL_ENV: string;
	export const VIRTUAL_ENV_PROMPT: string;
	export const WEBUI_SECRET_KEY: string;
	export const _: string;
	export const _HERMES_GATEWAY: string;
	export const _OLD_VIRTUAL_PATH: string;
	export const _OLD_VIRTUAL_PROMPT: string;
	export const _PYPROJECT_HOOKS_BUILD_BACKEND: string;
	export const SVELTEKIT_FORK: string;
}

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/public';
 * 
 * console.log(ENVIRONMENT); // => throws error during build
 * console.log(PUBLIC_BASE_URL); // => "http://site.com"
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * 
 * console.log(env.ENVIRONMENT); // => "production"
 * console.log(env.PUBLIC_BASE_URL); // => undefined
 * ```
 */
declare module '$env/dynamic/private' {
	export const env: {
		ACLOCAL_PATH: string;
		HOME: string;
		BROWSER_INACTIVITY_TIMEOUT: string;
		npm_config_node_gyp: string;
		CHROME_CRASHPAD_PIPE_NAME: string;
		ALLUSERSPROFILE: string;
		APPDATA: string;
		COLOR: string;
		EDITOR: string;
		MANPATH: string;
		APP_BUILD_HASH: string;
		HERMES_SESSION_THREAD_ID: string;
		MSYSTEM_CARCH: string;
		LOGONSERVER: string;
		TERMINAL_SINGULARITY_IMAGE: string;
		HERMES_MAX_ITERATIONS: string;
		COMMONPROGRAMFILES: string;
		HERMES_SESSION_ID: string;
		COMMONPROGRAMW6432: string;
		PROCESSOR_IDENTIFIER: string;
		MSYS_NO_PATHCONV: string;
		COMPUTERNAME: string;
		COMSPEC: string;
		CONFIG_SITE: string;
		DISPLAY: string;
		LANG: string;
		DRIVERDATA: string;
		TERMINAL_DOCKER_NETWORK: string;
		EFC_8728: string;
		HERMES_SERVE_HEADLESS: string;
		PSMODULEPATH: string;
		NPM_PREFIX_JS: string;
		FPS_BROWSER_APP_PROFILE_STRING: string;
		HERMES_SESSION_SOURCE: string;
		EXEPATH: string;
		HERMES_HOME: string;
		PROGRAMDATA: string;
		FPS_BROWSER_USER_PROFILE_STRING: string;
		HERMES_AGENT_TIMEOUT: string;
		HERMES_CRON_SESSION: string;
		HERMES_DESKTOP: string;
		HERMES_UI_SESSION_ID: string;
		HERMES_EXEC_ASK: string;
		HERMES_GATEWAY_SESSION: string;
		MSYSTEM: string;
		HERMES_INTERACTIVE: string;
		HOSTNAME: string;
		npm_config_allow_scripts: string;
		HERMES_SESSION_USER_NAME: string;
		HERMES_SESSION_CHAT_TYPE: string;
		HERMES_QUIET: string;
		MSYSTEM_PREFIX: string;
		HERMES_REAL_HOME: string;
		HERMES_SESSION_CHAT_ID: string;
		HERMES_SESSION_CHAT_NAME: string;
		HERMES_SESSION_KEY: string;
		HERMES_SESSION_MESSAGE_ID: string;
		HERMES_SESSION_PLATFORM: string;
		HERMES_SESSION_PROFILE: string;
		MINGW_PREFIX: string;
		HOMEDRIVE: string;
		HERMES_SESSION_USER_ID: string;
		npm_config_user_agent: string;
		MINGW_PACKAGE_PREFIX: string;
		HERMES_WEB_DIST: string;
		HOMEPATH: string;
		PKG_CONFIG_SYSTEM_LIBRARY_PATH: string;
		INIT_CWD: string;
		INFOPATH: string;
		LOCALAPPDATA: string;
		MINGW_CHOST: string;
		MSYS2_ARG_CONV_EXCL: string;
		MSYSTEM_CHOST: string;
		NODE: string;
		NODE_ENV: string;
		PIP_BUILD_TRACKER: string;
		npm_package_engines_node: string;
		NODE_EXE: string;
		NODE_OPTIONS: string;
		NPM_CLI_JS: string;
		npm_command: string;
		npm_config_cache: string;
		npm_config_engine_strict: string;
		npm_config_globalconfig: string;
		npm_config_global_prefix: string;
		npm_config_init_module: string;
		npm_config_local_prefix: string;
		npm_config_noproxy: string;
		npm_config_npm_version: string;
		NPM_PREFIX_NPM_CLI_JS: string;
		npm_config_prefix: string;
		npm_config_userconfig: string;
		npm_execpath: string;
		npm_lifecycle_event: string;
		npm_lifecycle_script: string;
		npm_node_execpath: string;
		npm_package_engines_npm: string;
		WINDIR: string;
		npm_package_json: string;
		npm_package_name: string;
		npm_package_version: string;
		NUMBER_OF_PROCESSORS: string;
		OLDPWD: string;
		OLLAMA_HOST: string;
		ONEDRIVE: string;
		ORIGINAL_PATH: string;
		ORIGINAL_TEMP: string;
		ORIGINAL_TMP: string;
		OS: string;
		TERMINAL_DAYTONA_IMAGE: string;
		PATH: string;
		PATHEXT: string;
		SSH_ASKPASS: string;
		PKG_CONFIG_PATH: string;
		PKG_CONFIG_SYSTEM_INCLUDE_PATH: string;
		PLINK_PROTOCOL: string;
		__COMPAT_LAYER: string;
		PROCESSOR_ARCHITECTURE: string;
		PROCESSOR_LEVEL: string;
		PROCESSOR_REVISION: string;
		PROGRAMFILES: string;
		_CONFIG_VERSION: string;
		PROGRAMW6432: string;
		PROMPT: string;
		PS1: string;
		PUBLIC: string;
		PWD: string;
		PYTHONIOENCODING: string;
		PYTHONNOUSERSITE: string;
		PYTHONPATH: string;
		PYTHONUTF8: string;
		TERMINAL_CONTAINER_CPU: string;
		SESSIONNAME: string;
		SHELL: string;
		SHLVL: string;
		SSL_CERT_FILE: string;
		SYSTEMDRIVE: string;
		SYSTEMROOT: string;
		TEMP: string;
		TERMINAL_CONTAINER_DISK: string;
		TERM: string;
		TERMINAL_CONTAINER_MEMORY: string;
		TERMINAL_LIFETIME_SECONDS: string;
		TERMINAL_CONTAINER_PERSISTENT: string;
		TERMINAL_CWD: string;
		TERMINAL_DOCKER_ENV: string;
		TERMINAL_DOCKER_EXTRA_ARGS: string;
		TERMINAL_DOCKER_FORWARD_ENV: string;
		TERMINAL_DOCKER_IMAGE: string;
		TERMINAL_DOCKER_MOUNT_CWD_TO_WORKSPACE: string;
		TERMINAL_DOCKER_RUN_AS_HOST_USER: string;
		TERMINAL_DOCKER_SHM_SIZE: string;
		TERMINAL_DOCKER_VOLUMES: string;
		TERMINAL_ENV: string;
		TERMINAL_HOME_MODE: string;
		TERMINAL_MODAL_IMAGE: string;
		TERMINAL_MODAL_MODE: string;
		TERMINAL_PERSISTENT_SHELL: string;
		TERMINAL_TIMEOUT: string;
		TERMINAL_VERCEL_RUNTIME: string;
		TMP: string;
		TMPDIR: string;
		USERDOMAIN: string;
		USERDOMAIN_ROAMINGPROFILE: string;
		USERNAME: string;
		USERPROFILE: string;
		VIRTUAL_ENV: string;
		VIRTUAL_ENV_PROMPT: string;
		WEBUI_SECRET_KEY: string;
		_: string;
		_HERMES_GATEWAY: string;
		_OLD_VIRTUAL_PATH: string;
		_OLD_VIRTUAL_PROMPT: string;
		_PYPROJECT_HOOKS_BUILD_BACKEND: string;
		SVELTEKIT_FORK: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://example.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.ENVIRONMENT); // => undefined, not public
 * console.log(env.PUBLIC_BASE_URL); // => "http://example.com"
 * ```
 * 
 * ```
 * 
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
