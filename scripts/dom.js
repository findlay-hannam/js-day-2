const ol = document.createElement('ol');
ol.style['list-style'] = 'none';
ol.style.margin = '10px 10px';
document.body.appendChild(ol);

export function renderPost({ name, picture, content }) {
  const li = document.createElement('li');
  
  const nameDiv = document.createElement('div');
  const nameText = document.createTextNode(name);
  nameDiv.appendChild(nameText);

  const img = document.createElement('img');
  img.src = picture;
  img.width = 50;

  const post = document.createElement('div');
  post.appendChild(document.createTextNode(content));
  
  li.appendChild(nameDiv);
  li.appendChild(img);
  li.appendChild(post);
  ol.appendChild(li);
}
