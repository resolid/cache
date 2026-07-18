import type { OxfmtConfig } from "oxfmt";
import { oxfmtConfig } from "@resolid/config/oxfmt";

export default oxfmtConfig({
  ignorePatterns: ["CHANGELOG.md"],
}) as OxfmtConfig;
