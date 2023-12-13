export const isHttpUrl = (imgsrc: string) =>
  /^(https?:\/\/|ftp:\/\/)([^\s/$.?#].[^\s]*)$/i.test(imgsrc)
