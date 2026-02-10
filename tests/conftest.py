import tempfile
from pathlib import Path

import pytest


@pytest.fixture
def tmp_module_dir():
    """Temporary directory for test modules"""
    with tempfile.TemporaryDirectory() as tmpdir:
        yield Path(tmpdir)


@pytest.fixture
def mock_profile():
    """Mock profile for testing"""
    return {"name": "test-profile", "modules": ["apt", "core"]}
