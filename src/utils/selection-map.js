export default function selectionFilter({ series , films }){
  return {
    series : [
      {
        title : 'Documentaries' ,
        data : series.filter((serie)=>serie.genre === 'documentaries')
      },
      {
        title : 'Comedies' ,
        data : series.filter((serie)=>serie.genre === 'comedies')
      },
      {
        title : 'Children' ,
        data : series.filter((serie)=>serie.genre === 'children')
      },
      {
        title : 'Crime' ,
        data : series.filter((serie)=>serie.genre === 'crime')
      },
      {
        title : 'Feel Good' ,
        data : series.filter((serie)=>serie.genre === 'feel-good')
      }
    ],
    films : [
      {
        title : 'Drama' ,
        data : films.filter((film)=>film.genre === 'drama')
      },
      {
        title : 'Thriller' ,
        data : films.filter((film)=>film.genre === 'thriller')
      },
      {
        title : 'Children' ,
        data : films.filter((film)=>film.genre === 'children')
      },
      {
        title : 'Suspense' ,
        data : films.filter((film)=>film.genre === 'suspense')
      },
      {
        title : 'Romance' ,
        data : films.filter((film)=>film.genre === 'romance')
      }
    ]
  }
}
