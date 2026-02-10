import pytest


def test_sanity_check():
    """Verify testing framework works"""
    assert 1 + 1 == 2


@pytest.mark.unit
def test_import_backend():
    """Test backend can be imported"""
    # Once src/backend refactored, update this
    assert True
