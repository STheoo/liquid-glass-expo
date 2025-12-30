import { Skia } from "@shopify/react-native-skia";

export const glsl = (source: TemplateStringsArray, ...values: any[]) => {
  const processed = source.reduce((result, str, i) => {
    return result + str + (values[i] ?? "");
  }, "");
  return processed;
};

export const frag = (source: TemplateStringsArray, ...values: any[]) => {
  const code = glsl(source, ...values);
  const effect = Skia.RuntimeEffect.Make(code);
  if (!effect) {
    throw new Error(`Failed to compile shader: ${code}`);
  }
  return effect;
};

