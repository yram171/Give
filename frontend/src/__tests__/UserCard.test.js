/**
 * Unit tests for the UserCard component.
 * Ensures correct rendering of user information and group name.
 */
import { render, screen } from '@testing-library/react';
import UserCard from '../components/UserCard.jsx';

describe('UserCard', () => {

  /**
   * Tests rendering of user name and group name.
   */
  it('renders user name and group name', () => {
    const user = { name: 'testuser', profilePic: '/test.jpg' };
    const group = { name: 'Test Group' };
    render(<UserCard user={user} group={group} />);
    expect(screen.getByText('@testuser')).toBeInTheDocument();
    expect(screen.getByText(/Test Group/)).toBeInTheDocument();
  });

  /**
   * Tests rendering of default avatar if profilePic is missing.
   */
  it('renders default avatar if profilePic is missing', () => {
    const user = { name: 'testuser' };
    const group = { name: 'Test Group' };
    render(<UserCard user={user} group={group} />);
    // Check for background image style on avatar container
    const avatarDiv = document.querySelector('.w-14.h-14.rounded-full');
    expect(avatarDiv).toHaveStyle('background-image: url(/images/noPfp.jpg)');
  });

  /**
   * Tests rendering no user name and group name.
   */
  it('does not render name or group if props missing', () => {
    render(<UserCard user={{}} group={{}} />);
    expect(screen.queryByText('@')).not.toBeInTheDocument();
    expect(screen.queryByText('posted to')).not.toBeInTheDocument();
  });
});
