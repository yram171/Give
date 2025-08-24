/**
 * Unit tests for the GroupTab component.
 * Ensures correct rendering of group name, member count, tags, and member list interaction.
 */
import { render, screen, fireEvent } from '@testing-library/react';
import Grouptab from '../components/GroupTab.jsx';

describe('Grouptab', () => {

  /**
   * Tests rendering of group name and member count.
   */
  it('renders group name and members', () => {
    render(<Grouptab id="1" />);
    expect(screen.getByText('Group 1')).toBeInTheDocument();
    expect(screen.getByText('6 members')).toBeInTheDocument();
    fireEvent.click(screen.getByText('View Members'));
    expect(screen.getAllByText('@katesmith0001').length).toBeGreaterThan(0);
  });
});
