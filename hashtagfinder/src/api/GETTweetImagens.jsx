const getTweetImagens = async (valorPesquisa, maisRequisicao) => {
  const url = `https://cors.eu.org/https://api.twitter.com/2/tweets/search/recent?query=${valorPesquisa}%20has:hashtags%20-is:retweet%20-is:quote%20has:images&max_results=${maisRequisicao}&expansions=author_id,attachments.media_keys&user.fields=id,name,username,profile_image_url,url&media.fields=type,url,width,height&tweet.fields=source`;

  const token =
    "AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX";

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const response = await fetch(url, requestOptions);
  const body = await response.json();

  if (body.meta.next_token) {
    console.log(body);
    console.log('GETTWITTERIMAGENS: ' + body.meta.next_token);
    return body;
  }
};

export { getTweetImagens };
