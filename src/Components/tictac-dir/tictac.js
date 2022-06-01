import React from 'react';
import "./tictacstyle.css";
class TicTac extends React.Component {
    toloadxory = () => {
        let newcookie = [];
        let cookiestring = document.cookie;
        let donecookies = [];
        let idx;

        cookiestring = cookiestring.split(';');
        cookiestring.map((el) => {
            newcookie.push(el.split('='));
        });
        newcookie.map((el) => {
            idx = el[0].split('_');
            if (!isNaN(idx[1])) {
                donecookies[idx[1].trim()] = el[1];
            }

        });

        if (donecookies.length != 9) {
            for (let i = 0; i < 9; i++) {
                document.cookie = `tictacidx_${i}=`;
            }
        
        }

        return (donecookies);
    };
    state = {
        wynik: 'Gra w toku...',
        xory: this.toloadxory(),
        res: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    };
    clicked = (ob) => {
        let counter = 0
        let list = this.state.xory;
        list.forEach(el => {
            counter += (el.length == 0) ? 0 : 1

        });

        let ste = (counter % 2 != 0) ? 'O' : 'X';
        if (list[ob.y + ob.x] == '') {
            list[ob.y + ob.x] = ste;
            document.cookie = `tictacidx_${ob.y + ob.x} = ${ste}`;
           
            this.setState({ xory: list });
            // this.setState({ counter: funcounter });
            let results = this.state.res;
            results[ob.y + ob.x]++;
            this.setState({ res: results });
        }
    };

    empty = () => {
        this.setState({ xory: ['', '', '', '', '', '', '', '', ''] });
        for (let i = 0; i < 9; i++) {
            document.cookie = `tictacidx_${i}=`;
        }
        
        console.log(document.cookie);
    }
    render() {
        let list = [];
        for (let i = 0; i < 7; i += 3) {
            for (let j = 0; j < 3; j++) {
                list.push({ y: i, x: j });
            }
        }
        let listbuttons = list.map((el) => {
            return (
                <div className=' col-4  p-2 '>
                    <div key={el.x + el.y} className='pt-4 fs-1 text-center h-20vh btn-secondary border-light rounded-3 ' onClick={this.clicked.bind(this, el)}>{this.state.xory[el.y + el.x]}</div>
                </div>
            )
        })
        return (
            <div className='justify-content-center w-100 m-auto'>
                <div className='mt-3 text-align-center'>

                    <div className='row-75 w-75 tex-center justify-content-center m-auto'>
                        <div className=' d-flex flex-wrap '>

                            <div className='col-10 m-auto d-flex flex-wrap '>
                                {listbuttons}
                            </div>

                        </div>


                        <button onClick={this.empty} type="button" className="btn btn-outline-secondary  m-3">Wyczyść</button>
                    </div>
                </div>
            </div>

        )
    }
}
export default TicTac;