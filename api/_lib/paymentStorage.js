import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { put } from "@vercel/blob";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOCAL_STORAGE_DIR = path.resolve(__dirname, "..", "..", ".local-data", "payments");

const hasBlobToken = () => Boolean(process.env.BLOB_READ_WRITE_TOKEN);

export const storePaymentRecord = async (record) => {
  const payload = JSON.stringify(record, null, 2);
  const pathname = `techbeyond/payments/${record.id}.json`;

  if (hasBlobToken()) {
    await put(pathname, payload, {
      access: "public",
      addRandomSuffix: false,
      token: process.env.BLOB_READ_WRITE_TOKEN,
      contentType: "application/json",
    });
    return;
  }

  await mkdir(LOCAL_STORAGE_DIR, { recursive: true });
  await writeFile(path.join(LOCAL_STORAGE_DIR, `${record.id}.json`), payload, "utf8");
};
