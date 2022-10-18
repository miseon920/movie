const Section1 = () => { 
    return (
        <section className="Section2">
            <div className="container">
                <div className="left"><img src={`${ process.env.PUBLIC_URL }/img/original.jpg`} alt="" /></div>
                <div className="right">
                    <div className="right01">
                        <h2>
                            <span>취향에 따라 골라보는 다양한</span>
                            <span>콘텐츠가 모두 한자리에</span>
                        </h2>
                        <p>디즈니+는 디즈니, 픽사, 마블, 스타워즈, 내셔널지오그래픽, Star의 최고 콘텐츠들을 모두 한곳에 모아 제공합니다.</p>
                    </div>
                     <div className="right02">
                        <h2>
                            <span>최대 4대의 기기에서 동시 스트리밍</span>
                        </h2>
                        <p>하나의 스트리밍 서비스로 모두가 각자 취향에 맞는 콘텐츠를 즐길 수 있습니다. 원하는 기기에서 원하는 방식으로 시청하세요. 최대 4대의 기기에서 동시 스트리밍하는 그 시간, 모두가 행복해집니다.</p>
                    </div>
                     <div className="right03">
                        <h2>
                            <span>다양한 콘텐츠 마음껏 저장 가능</span>
                            
                        </h2>
                        <p>최대 10대의 기기에서 원하는 콘텐츠를 자유롭게 저장하세요. 100편이 넘는 작품을 고화질 4K UHD 및 HDR로 시청할 수 있습니다. 강력한 시청 제한 기능으로 온 가족이 안전하게 이용할 수 있으며, 서로 떨어져 있을 때에도 GroupWatch로 함께 스트리밍할 수 있습니다.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Section1;