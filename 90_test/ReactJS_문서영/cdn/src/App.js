// App 컴포넌트
function App() {
    return (
        <ul className="container">
            {cards.map((item, idx) => (
                <Card 
                    key={idx}
                    mimg={item.cimg} 
                    mtit={item.ctit} 
                    mage={item.cage} 
                    mrate={item.crate}
                    mpoint={item.cpoint} 
                    mdate={item.cdate} 
                    mheart={item.cheart} 
                />
            ))}
        </ul>
    );
}
