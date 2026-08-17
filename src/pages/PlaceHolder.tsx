
interface Props {
    title: string
}


const PlaceHolder = ({ title }: Props) => {
    return (
   <div className="container">
      <div className="page-heading">
        <h1>{title}</h1>
      </div>
      <p style={{ textAlign: "center", color: "var(--color-text)" }}>
        This page is out of scope for this assessment — see the Home and
        Cart pages for the implemented features.
      </p>
    </div>
    )
}

export default PlaceHolder