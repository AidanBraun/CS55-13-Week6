import { render, screen } from '@testing-library/react'
import Layout from '../components/layout'
import '@testing-library/jest-dom'
 
describe('Layout', () => {
  it('renders a link to the SRJC website', () => {
    render(<Layout />)
 
    const jc_link = screen.getByRole('link', {
      name: /Visit SRJC/i,
    })
 
    expect(jc_link).toBeInTheDocument()
  })
})