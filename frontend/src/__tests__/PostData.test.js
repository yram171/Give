import { render, screen } from '@testing-library/react';
import PostData from '../components/PostData.jsx';

/**
 * Unit tests for the PostData component.
 * Ensures correct rendering of post question and images.
 */
describe('PostData', () => {

  /**
   * Tests rendering of post question and images.
   */
  it('renders question and images', () => {
    const post = {
      question: 'What is your favorite?',
      content: ['/img1.jpg', '/img2.jpg']
    };
    render(<PostData post={post} />);
    expect(screen.getByText('What is your favorite?')).toBeInTheDocument();
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
