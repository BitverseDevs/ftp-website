import React, { useEffect, useState } from "react";
// import SectionTitle from "../components/sectionTitle/sectionTitle";
// import SectionTitleV2 from "../components/sectiontitleV2/sectiontitlev2";
// import BorderLine from "../components/borderline/borderline";
import SectionTitle from 'components/sectionTitle/sectionTitle';
import SectionTitleV2 from 'components/sectiontitleV2/sectiontitlev2';
import BorderLine from 'components/borderline/borderline';
// import useWindowDimensions from "@/custom-hooks/use-window-dimension/use-window-dimension";
import useWindowDimensions from 'custom-hooks/use-window-dimension/use-window-dimension';
// import helpers from "@/helpers/helpers";
import helpers from 'helpers/helpers';
import { featuredSpecAssets, sectionTitles } from "data/sitehome";
import "./featuredSpecs.scss";

export function FeaturedSpecs() {
    const {width} = useWindowDimensions();
    const [isRender, setIsRender] = useState(undefined);
    const firstAsset = featuredSpecAssets[0]?.assetSrc;
    const secondAsset = featuredSpecAssets[1]?.assetSrc;
    const { featMsg: featMsg1, title: title1, desc: desc1 } = sectionTitles[1];
    const { featMsg: featMsg2, title: title2, desc: desc2 } = sectionTitles[2];
    const { featMsg: featMsg3, title: title3, desc: desc3 } = sectionTitles[3];
    const breakPoint = helpers.websiteBreakpoints(width);
    const shouldRender = helpers.breakpointRender(breakPoint);
    useEffect(()=> {
        setIsRender(shouldRender);
    }, [breakPoint])
    return (
        <React.Fragment>
            <div className="featured-specs-wrap">
                <SectionTitle featMsg={featMsg1} title={title1} desc={desc1} marginBottom={'75'}/>
                <div className='featured-specs-cont' border-render={`${isRender}`}>
                    <SectionTitleV2 fromWhere='featuredSpecsOne' featMsg={featMsg2} title={title2} desc={desc2} isDescUnorderedListed={true}/>
                </div>
                <div className='featured-specs-cont featured-specs-cont2' border-render={`${isRender}`}>
                    <SectionTitleV2 fromWhere='featuredSpecsTwo' featMsg={featMsg3} title={title3} desc={desc3} isDescUnorderedListed={true}/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default FeaturedSpecs;