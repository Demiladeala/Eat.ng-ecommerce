import { render, screen } from "@testing-library/react"

import Home from "../page"

//PATTERN FOR WRITING TESTS
// 1.ARRANGE { Arrange everything for the test }, 2.ACT {The Action we're taking }  3.ASSERTION { We check to make sure everything is what we expected },

it('it should have docs text', () => {
    render(<Home />) //ARRANGE

    const myElement = screen.getByText('Docs') //ACT

    expect(myElement).toBeInTheDocument()
})