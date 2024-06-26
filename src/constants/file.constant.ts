export const MIME_TYPE = {
  PNG: "image/png",
  JPEG: "image/jpeg",
  JPG: "image/jpg",
  PDF: "application/pdf",
  DOC: "application/msword",
  DOT: "application/msword",
  DOCX: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  DOTX: "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
  DOCM: "application/vnd.ms-word.document.macroEnabled.12",
  DOTM: "application/vnd.ms-word.template.macroEnabled.12",
  XLS: "application/vnd.ms-excel",
  XLT: "application/vnd.ms-excel",
  XLA: "application/vnd.ms-excel",
  XLSX: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  XLTX: "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
  XLSM: "application/vnd.ms-excel.sheet.macroEnabled.12",
  XLTM: "application/vnd.ms-excel.template.macroEnabled.12",
  XLAM: "application/vnd.ms-excel.addin.macroEnabled.12",
  XLSB: "application/vnd.ms-excel.sheet.binary.macroEnabled.12",
  PPT: "application/vnd.ms-powerpoint",
  POT: "application/vnd.ms-powerpoint",
  PPS: "application/vnd.ms-powerpoint",
  PPA: "application/vnd.ms-powerpoint",
  PPTX: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  POTX: "application/vnd.openxmlformats-officedocument.presentationml.template",
  PPSX: "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
  PPAM: "application/vnd.ms-powerpoint.addin.macroEnabled.12",
  PPTM: "application/vnd.ms-powerpoint.presentation.macroEnabled.12",
  POTM: "application/vnd.ms-powerpoint.template.macroEnabled.12",
  PPSM: "application/vnd.ms-powerpoint.slideshow.macroEnabled.12",
  MDB: "application/vnd.ms-access",
} as const;

export type MimeType = (typeof MIME_TYPE)[keyof typeof MIME_TYPE];
