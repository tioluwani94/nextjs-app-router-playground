import { css, cx } from "@/styled-system/css";
import { flex, stack } from "@/styled-system/patterns";
import Link from "next/link";
import { Collection } from "../types";

const getCollections = async (): Promise<Collection[]> => {
  const res = await fetch(`${process.env.BASE_API_URL}/collection/public/findersme`, {next:{revalidate: 0}})

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const collections = await getCollections();

  return (
    <section className={stack({gap: '12px'})}>{
      collections.map(c => (<Link href={`/collection/${c.slug}`} key={c.slug} className={cx(flex(), css({p: '12px 16px', borderWidth: '1px', rounded: '16px', borderColor: 'gray.200'}))}>
        <div className={cx(stack({gap: '8px', direction: 'column'}))}>
          <h3>{c.name}</h3>
          <p>{c.description}</p>
          </div>
        </Link>))
    }</section>
  )
}
