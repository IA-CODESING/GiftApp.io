
export const GiftItem = ( { title, url, id} ) => {

  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
        <a href={url}>Go</a>
    </div>

  )
}
