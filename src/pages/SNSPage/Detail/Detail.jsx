import React from 'react';
import './Detail.scss';
import feedLikeDac from '../../../images/like-dac.svg';
import comment from '../../../images/comment.svg';
import close from '../../../images/close.svg';

function Detail() {
  return (
    <div className='feed-detail'>
        <div className='bg'></div>
        <div className='wrapper'>
            <div className='close'>
                <img src={close} alt='닫기'/>
            </div>

            <div className='main-image'></div>

            <div className='contents'>
                <div className='feed-content'>
                    <div className='top'>
                        <div className='profile-image'>
                        </div>
                        <div className='feed-desc'>
                            <div className='nickname txt-bold'>Ellie</div>
                            <div className='timestamp'>8:15 PM, yesterday</div>
                        </div>
                    </div>

                    <div className='body'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, qui. Culpa quisquam aliquid illo voluptas quaerat iste, soluta sed, omnis doloribus sequi exercitationem, dolores velit delectus tempore ab. Quidem, odit?
                    </div>

                    <div className='bottom'>
                        <div className='like'>
                            <div className='asset'>
                                <img src={feedLikeDac} alt='좋아요'/>
                            </div>
                            <div className='title txt-bold'>25k</div>
                        </div>
                        <div className='comment'>
                            <div className='asset'>
                                <img src={comment} alt='댓글'/>
                            </div>
                            <div className='title txt-bold'>2k</div>
                        </div>
                    </div>
                </div>

                <div className='feed-comments'>
                    <div className='comment-form comment'>
                        <div className='top'>
                            <div className='left'>
                                <div className='profile-image'></div>
                                <div className='feed-desc'>
                                    <div className='nickname txt-bold'>Ellie</div>
                                    <div className='timestamp'>8:15 PM, yesterday</div>
                                </div>
                            </div>

                            <div className='right'>
                                <div className='like'>
                                    <div className='asset'>
                                        <img src={feedLikeDac} alt='좋아요' style={{ width: '16px' }}/>
                                    </div>
                                    <div className='title txt-bold'>34k</div>
                                </div>

                                <div className='reply-btn'>대답해 답글</div>
                            </div>
                        </div>

                        <div className='body'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatibus possimus placeat dolorem nemo distinctio qui fuga cum laudantium vitae impedit iure autem aut, neque itaque, enim tenetur illo molestiae.
                        </div>
                    </div>

                    <div className='comment-form reply'>
                        <div className='top'>
                            <div className='left'>
                                <div className='profile-image'></div>
                                <div className='feed-desc'>
                                    <div className='nickname'>Ellie</div>
                                    <div className='timestamp'>8:15 PM, yesterday</div>
                                </div>
                            </div>

                            <div className='right'>
                                <div className='like'>
                                    <div className='asset'>
                                        <img src={feedLikeDac} alt='좋아요' style={{ width: '16px' }}/>
                                    </div>
                                    <div className='title txt-bold'>34k</div>
                                </div>

                                <div className='reply-btn'>대대답해 답글</div>
                            </div>
                        </div>

                        <div className='body'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatibus possimus placeat dolorem nemo distinctio qui fuga cum laudantium vitae impedit iure autem aut, neque itaque, enim tenetur illo molestiae.
                        </div>
                    </div>

                    <div className='comment-form comment'>
                        <div className='top'>
                            <div className='left'>
                                <div className='profile-image'></div>
                                <div className='feed-desc'>
                                    <div className='nickname'>Ellie</div>
                                    <div className='timestamp'>8:15 PM, yesterday</div>
                                </div>
                            </div>

                            <div className='right'>
                                <div className='like'>
                                    <div className='asset'>
                                        <img src={feedLikeDac} alt='comment좋아요'/>
                                    </div>
                                    <div className='title txt-bold'>34k</div>
                                </div>

                                <div className='reply-btn'>대답해 답글</div>
                            </div>
                        </div>

                        <div className='body'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatibus possimus placeat dolorem nemo distinctio qui fuga cum laudantium vitae impedit iure autem aut, neque itaque, enim tenetur illo molestiae.
                        </div>
                    </div>

                    <div className='comment-form comment'>
                        <div className='top'>
                            <div className='left'>
                                <div className='profile-image'></div>
                                <div className='feed-desc'>
                                    <div className='nickname'>Ellie</div>
                                    <div className='timestamp'>8:15 PM, yesterday</div>
                                </div>
                            </div>

                            <div className='right'>
                                <div className='like'>
                                    <div className='asset'>
                                        <img src={feedLikeDac} alt='좋아요'/>
                                    </div>
                                    <div className='title txt-bold'>34k</div>
                                </div>

                                <div className='reply-btn'>답글</div>
                            </div>
                        </div>

                        <div className='body'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatibus possimus placeat dolorem nemo distinctio qui fuga cum laudantium vitae impedit iure autem aut, neque itaque, enim tenetur illo molestiae.
                        </div>
                    </div>
                </div>

                <div className='feed-write-comment'>
                    <div className='profile-image'></div>
                    <div className='write-comment'>
                        <input type="text" placeholder='댓글을 남겨주세요!'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Detail
