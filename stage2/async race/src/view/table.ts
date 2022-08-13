import { Winner, Car } from "../types/types";
import { setCarImage } from "./car";

const getWinner = (winner: Winner, index: number) => `
<tr>
<td scope="row">${index + 1}</td>
      <td>${setCarImage((winner.car as Car).color)}</td>
      <td>${(winner.car as Car).name}</td>
      <td>${winner.wins}</td>
      <td>${winner.time}</td>
      </tr>
`;

const getWinnersTemplate = (
  winners: Winner[],
  sortBy: string | null,
  sortOrder: string | null
) => `
<table class="table table-bordered table-dark table-hover">
  <thead>
    <tr>
      <th>#</th>
      <th>Car</th>
      <th>Name</th>
      <th class="wins ${sortBy === "wins" ? sortOrder as string : ""}">Wins</th>
      <th class="best ${sortBy === "time" ? sortOrder as string : ""}">Best</th>
    </tr>
  </thead>
  <tbody>
  ${winners.map((winner, index) => getWinner(winner, index)).join("")}
  </tbody>
</table>`;

export default getWinnersTemplate;
