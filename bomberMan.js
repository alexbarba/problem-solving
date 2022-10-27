const instantExplotion = (grid, explotionGrid) => {
  const actualGrid = [...grid.map(row => row.split(''))]

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (explotionGrid[i][j] === '.') {
        continue
      }

      actualGrid[i][j] = '.'

      if (i > 0) {
        actualGrid[i - 1][j] = '.'
      }
      if (i + 1 < actualGrid.length) {
        actualGrid[i + 1][j] = '.'
      }

      if (j > 0) {
        actualGrid[i][j - 1] = '.'
      }

      if (j + 1 < actualGrid[0].length) {
        actualGrid[i][j + 1] = '.'
      }
    }
  }

  return actualGrid.map(row => row.join(''))
}

const bomberMan = (n, grid) => {
  if (n < 2) {
    return grid
  }

  let fullBombGrid = [...Array(grid.length).keys()].map(() =>
    'O'.repeat(grid[0].length)
  )

  if (n % 2 === 0) {
    return fullBombGrid
  }

  let actualGrid = instantExplotion(fullBombGrid, grid)

  if ((n + 1) % 4 === 0) {
    return actualGrid
  }

  actualGrid = instantExplotion(fullBombGrid, actualGrid)

  return actualGrid
}
