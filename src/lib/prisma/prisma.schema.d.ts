import { Path } from '@angular-devkit/core';

export interface PrismaOptions {
  /**
   * The name of the provider.
   */
  name: string;
  /**
   * The path to create the provider.
   */
  path?: string;
  /**
   * The path to insert the provider declaration.
   */
  module?: Path;
  /**
   * Directive to insert declaration in module.
   */
  skipImport?: boolean;
  /**
   * Metadata name affected by declaration insertion.
   */
  metadata?: string;
  /**
   * Nest element type name
   */
  type?: string;
  /**
   * Application language.
   */
  language?: string;
  /**
   * The source root path.
   */
  sourceRoot?: string;
  /**
   * Specifies if a spec file is generated.
   */
  spec?: boolean;
  /**
   * Specifies the file suffix of spec files.
   * @default "spec"
   */
  specFileSuffix?: string;
  /**
   * Flag to indicate if a directory is created.
   */
  flat?: boolean;
  /**
   * Class name to be used internally.
   */
  className?: string;
  /**
   * Flag to indicate if Swagger is installed.
   */
  isSwaggerInstalled?: boolean;
}
