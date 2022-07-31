import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Todo from './Todo.jsx'


describe('todo test',()=>{
    let = button ,input;

    beforeEach(()=>{
        render(<Todo/>)

        button =screen.getByText('ekleme')
        input = screen.getByLabelText('bunutest')
    })


    test('ilk uc degerin yukenmesi',()=>{
        const items = screen.getAllByAltText(/item/i) 
        expect(items.length).toEqual(3)
    })

    test('button ve input varmi',()=>{
        expect(button).toBeInTheDocument()
        expect(input).toBeInTheDocument()
    })

    test('inputa deger gilimce',()=>{
        //inputu doldurmak
        const name='dneme'
        userEvent.type(input,name)

        //butonu tiklamak
        userEvent.click(button)

        //beklemek sonucu
        expect(screen.getByTex(name)).toBeInTheDocument()
    })
})