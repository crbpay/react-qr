import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
    js.configs.recommended,
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                window: "readonly",
                document: "readonly",
                console: "readonly",
                navigator: "readonly",
                Request: "readonly",
                Math: "readonly",
                Number: "readonly",
                parseFloat: "readonly",
                isNaN: "readonly",
                setTimeout: "readonly"
            }
        },
        plugins: {
            react: reactPlugin,
            "react-hooks": reactHooksPlugin,
            "@typescript-eslint": tsPlugin
        },
        rules: {
            ...reactPlugin.configs.recommended.rules,
            ...reactHooksPlugin.configs.recommended.rules,
            ...tsPlugin.configs.recommended.rules,
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "@typescript-eslint/no-explicit-any": "warn"
        },
        settings: {
            react: {
                version: "detect"
            }
        }
    }
];
