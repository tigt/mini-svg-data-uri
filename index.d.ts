declare function svgToTinyDataUri(svgString: string): `data:image/svg+xml,${string}`;

declare namespace svgToTinyDataUri {
  function toSrcset(svgString: string): string;
}

export = svgToTinyDataUri;
