const MostVoted = ({ anecdotes, selected, votes }) => {
  const mostVoted = votes.indexOf(Math.max(...votes));
  if (selected === mostVoted) {
    return "";
  }

  return (
    <div>
      <h1>Anecdote with most votes</h1>
      {anecdotes[mostVoted]}
    </div>
  );
};

export default MostVoted;
