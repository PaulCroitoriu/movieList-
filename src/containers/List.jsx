import React from "react";
import Card from "../components/Card/Card";

class List extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch("../../data/data.json")
      .then(res => {
        return res.json();
        // return res.text();
      })
      .then(movie => {
        console.log(movie);
        this.setState({
          data: movie,
          loading: false,
        });
      });
  }

  render() {
    const { data, loading } = this.state;
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="row">
        {data.map(movie => (
          <div className="col-lg-3 col-md-6">
            <Card movie={movie} key={movie.id} />
          </div>
        ))}
      </div>
    );
  }
}

export default List;
