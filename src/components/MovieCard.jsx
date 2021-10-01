function MovieCard(props) {
  return (
    <div className="col-4 col-md-4 col-lg-3 col-xl-2 pl-0 mb-3">
      <img src={props.movie.Poster} alt="" class="section-img"/>
    </div>
  )
}
export default MovieCard;