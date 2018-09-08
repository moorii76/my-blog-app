const baseURL = 'https://us-central1-travelerengineerdiary.cloudfunctions.net/v1';

const convertJSON = (json) => {
    let jsonList = [];

    for(let key in json) {
        let item = json[key];
        item.id = key;
        jsonList.push(item)
    }
    
    return jsonList;
}

const  getBlogList =  async () => {
    const res = await (await fetch(baseURL + '/bloglist')).json();
   
    return convertJSON(res.bloglist);
};

const getDateList = async () => {
    const res = await (await fetch(baseURL + '/datelist')).json();
   
    return convertJSON(res.datelist);
};

const getTagList = async () => {
    const res = await (await fetch(baseURL + '/taglist')).json();

    return convertJSON(res.taglist);
};

const getSearchBlog = async (req) => {
    const res = await(await fetch(baseURL + '/searchblog' + req)).json();

    return convertJSON(res.bloglist);
}

export const getStateItems = async () => {
    let res = {blogitems: [], dateItems: [], tagItems: []}

    res.blogitems = await getBlogList();
    res.dateItems = await getDateList();
    res.tagItems = await getTagList();

    console.log('====================================');
    console.log('Firebaseにリクエストされました。');
    console.log('====================================');

    return res;
};

export const getSearchItems = async (seachValue, selectDate, selectTagItems) => {
    let res = {blogitems: []},
        req = "";

    req += "?text="+seachValue
    req += "&date="+selectDate
    req += "&tags[]="+selectTagItems.join('&tags[]=');

    res.blogitems = await getSearchBlog(encodeURI(req));

    console.log('====================================');
    console.log('Firebaseにリクエストされました。');
    console.log('====================================');

    return res;
};