import React from 'react'
import { ThemeProvider } from 'styled-components'
import { 
    ParagraphTitle,
    Paragraph,
    ButtonSearch,
    Button,
    Input
} from './../styles'

export const Header = ({ className }) => {
    return (
        <div className={className}>
                <Paragraph>netflixroulette</Paragraph>
                <Button>+ ADD MOVIE</Button>
                <ThemeProvider theme={ParagraphTitle}>
                    <Paragraph>FIND YOUR MOVIE</Paragraph>
                </ThemeProvider>
                <Input placeholder="What do you want to watch?"/>
                <ButtonSearch>SEARCH</ButtonSearch>
        </div>
    )
}
