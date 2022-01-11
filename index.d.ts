declare function svgToTinyDataUri(svgString: string, encoding: string): string;

declare namespace svgToTinyDataUri {
  function toSrcset(svgString: string): string;
}

export = svgToTinyDataUri;