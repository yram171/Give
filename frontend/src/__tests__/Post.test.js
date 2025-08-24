import { render, screen } from '@testing-library/react';
import Post from '../components/Post.jsx';

/**
 * Unit tests for the Post component.
 * Ensures correct rendering of user information, post content, and poll options.
 */
describe('Post', () => {

  /**
   * Tests rendering of UserCard, PostData, and PollBox components.
   */
  it('renders UserCard, PostData, and PollBox', () => {
    const user = { name: 'testuser', profilePic: '/test.jpg' };
    const group = { name: 'Test Group' };
    const post = { question: 'Q?', content: []};
    const pollOptions = ['A', 'B'];
    render(<Post user={user} group={group} post={post} pollOptions={pollOptions} />);
    expect(screen.getByText('@testuser')).toBeInTheDocument();
    expect(screen.getByText('Q?')).toBeInTheDocument();
  });
});
