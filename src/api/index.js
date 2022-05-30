import axios from 'axios';

const GetPost = async () => {
  try {
    const response = await axios.get('/data/post.json');
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default {
  GetPost
}